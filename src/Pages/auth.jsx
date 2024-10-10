import React, { useState } from 'react';
import Button from '../components/Button';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
  <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold text-gray-900 text-center">
      {isLogin ? 'Login' : 'Sign Up'}
    </h2>
    <form className="mt-8 space-y-6" method="POST">
      {!isLogin && (
        <div>
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      )}
      <div>
        <label htmlFor="email" className="block text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
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
