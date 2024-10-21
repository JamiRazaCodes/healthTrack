import React from 'react';

function NutritionPlanning() {
  return (
    <div className="p-20 bg-gray-50 min-h-screen flex flex-col items-center">
  <h2 className="text-3xl font-bold text-center mb-8">Eat Right, Stay Healthy</h2>
  <p className="text-xl text-gray-700 text-center mb-6 max-w-2xl">
    A well-balanced diet is essential for maintaining good health. Our Nutrition Planning feature makes it easy to plan your meals, track your daily intake, and stay consistent with your nutritional goals. Take the guesswork out of your diet and build a healthy lifestyle with personalized guidance.
  </p>

  <img src="https://humanitarianglobal.com/wp-content/uploads/2022/02/A-meal-plan-1200x600.jpg" alt="Healthy Meal Planning" className="w-full max-w-4xl mb-8 rounded-lg shadow-lg" />
  
  <div className="text-xl text-gray-700 space-y-4 max-w-2xl">
    <p>With our Nutrition Planning feature, you can:</p>
    <ul className="list-disc list-inside space-y-2">
      <li>Plan Balanced Meals: Easily create meal plans that align with your nutritional goals and dietary preferences.</li>
      <li>Track Your Daily Intake: Log your meals and monitor your calorie, protein, carb, and fat intake to ensure you're on the right path.</li>
      <li>Access Healthy Recipes: Browse a wide range of recipes that support your goals, from weight loss to muscle gain.</li>
      <li>Receive Nutritional Insights: Get tips and advice based on your eating patterns and nutrient intake.</li>
      <li>Set and Achieve Goals: Define your weight, fitness, or dietary goals, and track your progress with real-time feedback.</li>
      <li>Stay Accountable: Get reminders and notifications to stay on track with your eating plan.</li>
      <li>Sync With Devices: Connect with your wearable devices or mobile apps to track your intake and progress on the go.</li>
    </ul>
  </div>

  <img src="https://foodandfitnesspro.com/wp-content/uploads/2021/07/large-AdobeStock_334093559.jpeg" alt="Meal Tracking" className="w-full max-w-4xl mt-8 rounded-lg shadow-lg" />
</div>

  );
}

export default NutritionPlanning;
