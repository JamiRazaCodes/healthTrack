import React from 'react';

function ActivityMonitoring() {
  return (
    <div className="p-20 bg-gray-50 min-h-screen flex flex-col items-center">
    <h2 className="text-3xl font-bold text-center mb-8">Track Your Progress, Reach Your Goals</h2>
    
    <p className="text-xl text-gray-700 text-center mb-6 max-w-3xl">
      Monitoring your physical activity is the first step toward achieving your fitness and health goals. Our Activity Monitoring feature helps you keep track of your daily steps, workouts, and overall physical activity to ensure you stay on the right path. Whether you're aiming for weight loss, muscle building, or simply maintaining a healthy lifestyle, consistent tracking keeps you motivated and focused.
    </p>
    
    <img src="https://as2.ftcdn.net/v2/jpg/03/22/24/85/1000_F_322248575_5Udlo8rOuV16EVrW2rNHjpt4uI4UQ1HL.jpg" />
  
    <div className="text-xl text-gray-700 space-y-4 max-w-3xl">
      <p>With our feature, you can:</p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Set Personal Goals:</strong> Define your own fitness targets, from the number of steps to workout intensity, and track your progress in real-time.</li>
        <li><strong>Track Workouts:</strong> Easily log your workouts, including cardio, strength training, and more.</li>
        <li><strong>Visualize Progress:</strong> Analyze your performance over time with insightful charts and metrics.</li>
        <li><strong>Measure Calories Burned:</strong> Keep track of your daily calorie expenditure, helping you stay informed and adjust your diet accordingly.</li>
        <li><strong>Stay Motivated:</strong> Regular updates and progress summaries allow you to celebrate your milestones and see the real-time impact of your hard work.</li>
        <li><strong>Improve Consistency:</strong> Consistent activity monitoring encourages regular physical activity and improves overall health outcomes.</li>
        <li><strong>Sync Across Devices:</strong> Seamlessly sync your activities with wearable devices and mobile apps, so you can track on the go.</li>
        <li><strong>Customize Reminders:</strong> Get personalized reminders to move, stretch, or complete your daily goals to stay active throughout the day.</li>
        <li><strong>Transform Your Routine:</strong> Our feature turns your fitness journey into measurable success, ensuring that every step, every workout, and every move brings you closer to your goals.</li>
        <li><strong>Start Tracking Today:</strong> Experience the power of insight-driven progress and take your health to the next level!</li>
      </ul>
    </div>
  
    <img src="https://images.stockcake.com/public/f/a/7/fa7d9b47-db61-456b-b9ba-b86a3d4a34e0/intense-workout-session-stockcake.jpg" alt="Workout Logging" className="w-full max-w-4xl mt-8 rounded-lg shadow-lg" />
  </div>
  
  );
}

export default ActivityMonitoring;