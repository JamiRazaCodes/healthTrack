import React, { useState } from 'react';
import Button from '../components/Button';
import { auth, storage } from '../Firebase'; 
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { db } from '../Firebase'; 
import { doc, setDoc } from 'firebase/firestore'; 


const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate(); 

  const handleAvatarChange = (e) => {
    if (e.target.files[0]) {
      setAvatar(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (isLogin) {
        // Login logic
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('User signed in:', userCredential.user);
            
            // Save user info in localStorage
            localStorage.setItem('user', JSON.stringify(userCredential.user));

            navigate('/'); // Redirect to home page after login
        } catch (error) {
            setError(error.message);
            console.error('Error signing in:', error);
        }
    } else {
        // Sign up logic
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('User signed up:', user);

            if (avatar) {
                const avatarRef = ref(storage, `avatars/${user.uid}`);
                await uploadBytes(avatarRef, avatar);
                const avatarURL = await getDownloadURL(avatarRef);

                await updateProfile(user, { displayName: name, photoURL: avatarURL });
                
                // Save user info to Firestore and localStorage
                await setDoc(doc(db, 'users', user.uid), {
                    uid: user.uid,
                    email: user.email,
                    displayName: name,
                    photoURL: avatarURL,
                });
                localStorage.setItem('user', JSON.stringify(user));
            } else {
                await updateProfile(user, { displayName: name });
                
                // Save user info to Firestore and localStorage
                await setDoc(doc(db, 'users', user.uid), {
                    uid: user.uid,
                    email: user.email,
                    displayName: name,
                });
                localStorage.setItem('user', JSON.stringify(user));
            }

            navigate('/'); // Redirect to home page after sign-up
        } catch (error) {
            setError(error.message);
            console.error('Error signing up:', error);
        }
    }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 text-center">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div>
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="avatar" className="block text-gray-700">Avatar</label>
                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  accept="image/*"
                  className="mt-1 w-full"
                  onChange={handleAvatarChange}
                />
              </div>
            </>
          )}
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            label={isLogin ? 'Login' : 'Sign Up'}
            type="submit"
            className="w-full px-6 py-2 mt-4 bg-purple-500 text-white rounded-full hover:bg-purple-600"
          />
        </form>
        <p className="mt-6 text-center text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-purple-500 hover:text-purple-600 ml-1 focus:outline-none"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
