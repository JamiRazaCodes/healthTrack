import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore'; 
import { db } from '../Firebase'; 
import Swal from 'sweetalert2'; 
import Button from '../components/Button';

function BioForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    height: '',
    weight: '',
    diet: '',
    sleepRoutine: ''
  });

  const navigate = useNavigate();

  s
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      
      const docRef = await addDoc(collection(db, 'users'), formData);
      console.log('Document written with ID: ', docRef.id);

      
      Swal.fire({
        icon: 'success',
        title: 'Form Submitted!',
        text: 'Your details have been saved successfully!',
        confirmButtonText: 'OK'
      }).then(() => {
       
        navigate('/NewTrack');
      });

      
      setFormData({
        name: '',
        age: '',
        height: '',
        weight: '',
        diet: '',
        sleepRoutine: ''
      });
    } catch (error) {
      console.error('Error adding document: ', error);
      Swal.fire({
        icon: 'error',
        title: 'Submission Failed!',
        text: 'There was an issue saving your details. Please try again.'
      });
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Tell Us About Yourself</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
            Age
          </label>
          <input
            type="number"
            id="age"
            value={formData.age}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your age"
            required
          />
        </div>

        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="height">
            Height (in cm)
          </label>
          <input
            type="number"
            id="height"
            value={formData.height}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your height in cm"
            required
          />
        </div>

       
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weight">
            Weight (in kg)
          </label>
          <input
            type="number"
            id="weight"
            value={formData.weight}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your weight in kg"
            required
          />
        </div>

        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="diet">
            Diet (e.g., vegetarian, vegan, keto, etc.)
          </label>
          <input
            type="text"
            id="diet"
            value={formData.diet}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Describe your diet"
            required
          />
        </div>

        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sleepRoutine">
            Sleep Routine (hours per night)
          </label>
          <input
            type="number"
            id="sleepRoutine"
            value={formData.sleepRoutine}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="How many hours do you sleep per night?"
            required
          />
        </div>

        
        <Button label="Submit" />
      </form>
    </div>
  );
}

export default BioForm;
