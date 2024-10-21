import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore functions
import { db } from '../Firebase'; // Firebase setup
import Swal from 'sweetalert2'; // Optional: for success alert
import Button from './Button';

function BioForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    height: '',
    weight: '',
    diet: '',
    sleepRoutine: ''
  });

  const navigate = useNavigate(); // Hook to navigate after form submission

  // Handle input field changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send data to Firestore
      const docRef = await addDoc(collection(db, 'users'), formData);
      console.log('Document written with ID: ', docRef.id);

      // Optional: Show success alert
      Swal.fire({
        icon: 'success',
        title: 'Form Submitted!',
        text: 'Your details have been saved successfully!',
        confirmButtonText: 'OK'
      }).then(() => {
        // Navigate to the new page (NewTrack)
        navigate('/NewTrack');
      });

      // Clear form after submission
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
        {/* Name Field */}
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

        {/* Age Field */}
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

        {/* Height Field */}
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

        {/* Weight Field */}
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

        {/* Diet Field */}
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

        {/* Sleep Routine Field */}
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

        {/* Submit Button */}
        <Button label="Submit" />
      </form>
    </div>
  );
}

export default BioForm;
