import React from 'react';

function MentalWellness() {
  return (
    <div className="p-20 bg-gray-50 min-h-screen flex flex-col items-center">
  <h2 className="text-3xl font-bold text-center mb-8">Prioritize Your Mental Health, Reduce Stress</h2>
  <p className="text-xl text-gray-700 text-center mb-6 max-w-2xl">
    Your mental health is just as important as your physical well-being. Our Mental Wellness feature is designed to help you stay mentally healthy and reduce stress through mindfulness exercises and guided meditations. Whether you're dealing with anxiety, stress, or simply looking to cultivate inner peace, we’ve got the tools to support you.
  </p>

  <img src="https://www.deligence.com/wp-content/uploads/2023/10/2.webp" alt="Guided Meditation" className="w-full max-w-4xl mb-8 rounded-lg shadow-lg" />
  
  <div className="text-xl text-gray-700 space-y-4 max-w-2xl">
    <p>With our Mental Wellness feature, you can:</p>
    <ul className="list-disc list-inside space-y-2">
      <li>Access Guided Meditations: Enjoy a variety of meditation sessions tailored to your needs, from stress relief to improved focus.</li>
      <li>Practice Mindfulness: Learn mindfulness techniques that you can incorporate into your daily routine to help you stay present and reduce anxiety.</li>
      <li>Track Your Mood: Monitor your emotional health over time to better understand your mental well-being.</li>
      <li>Receive Personalized Recommendations: Get tailored wellness tips based on your mood and stress levels.</li>
      <li>Join Community Support: Connect with others in our wellness community to share experiences and support one another.</li>
      <li>Access Mental Health Resources: Explore a library of articles, tips, and exercises from mental health experts.</li>
      <li>Improve Your Sleep: Use our sleep improvement tools to wind down, reduce anxiety, and get a better night's rest.</li>
    </ul>
  </div>

  <img src="https://santoshyogainstitute.com/storage/2023/12/yoga-by-santoshyogainstitute-in-saltlakecity-2-1200x600.webp" alt="Mindfulness Yoga" className="w-full max-w-4xl mt-8 rounded-lg shadow-lg" />
</div>

  );
}

export default MentalWellness;
