import React from 'react';

function NewTrack() {
  
  const dietPlan = [
    { day: 'Monday', meal: 'Oats with fruits, Grilled chicken salad, Steamed vegetables and brown rice' },
    { day: 'Tuesday', meal: 'Smoothie bowl, Turkey wrap, Quinoa with stir-fry veggies' },
    { day: 'Wednesday', meal: 'Avocado toast, Chicken breast with sweet potato, Veggie soup with whole wheat bread' },
    { day: 'Thursday', meal: 'Scrambled eggs with spinach, Tuna salad, Grilled salmon with steamed broccoli' },
    { day: 'Friday', meal: 'Greek yogurt with honey, Veggie pasta, Grilled tofu with quinoa' },
    { day: 'Saturday', meal: 'Smoothie with chia seeds, Lentil soup, Grilled chicken with mixed veggies' },
    { day: 'Sunday', meal: 'Egg white omelet, Salad with mixed nuts, Baked fish with quinoa' },
  ];

  const exercisePlan = [
    { day: 'Monday', routine: '30 mins jogging, 15 mins strength training (legs)' },
    { day: 'Tuesday', routine: '40 mins cycling, 20 mins yoga stretches' },
    { day: 'Wednesday', routine: '25 mins HIIT workout, 15 mins strength training (arms)' },
    { day: 'Thursday', routine: '30 mins swimming, 20 mins core exercises' },
    { day: 'Friday', routine: '45 mins brisk walking, 15 mins full body stretch' },
    { day: 'Saturday', routine: '20 mins jump rope, 30 mins strength training (full body)' },
    { day: 'Sunday', routine: 'Rest day or light yoga for 30 mins' },
  ];

  const meditationPlan = [
    { day: 'Monday', duration: '10 mins guided breathing' },
    { day: 'Tuesday', duration: '15 mins mindfulness meditation' },
    { day: 'Wednesday', duration: '10 mins body scan meditation' },
    { day: 'Thursday', duration: '20 mins walking meditation' },
    { day: 'Friday', duration: '10 mins visualization meditation' },
    { day: 'Saturday', duration: '15 mins progressive relaxation' },
    { day: 'Sunday', duration: '20 mins nature sound meditation' },
  ];

  const sleepRoutine = {
    targetHours: '7-8 hours',
    recommendations: [
      'Avoid screens 30 mins before bed',
      'Maintain a consistent sleep schedule',
      'Sleep in a cool, dark room',
      'Avoid heavy meals 2-3 hours before bedtime',
      'Engage in relaxing activities before sleep (reading, light stretching)'
    ]
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-4xl font-bold mb-6 text-center">Your Personalized Plan</h2>

      
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Diet Plan</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b py-2">Day</th>
              <th className="border-b py-2">Meal Plan</th>
            </tr>
          </thead>
          <tbody>
            {dietPlan.map((plan, index) => (
              <tr key={index}>
                <td className="border-b py-2">{plan.day}</td>
                <td className="border-b py-2">{plan.meal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Exercise & Meditation Plan</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b py-2">Day</th>
              <th className="border-b py-2">Exercise Routine</th>
              <th className="border-b py-2">Meditation Plan</th>
            </tr>
          </thead>
          <tbody>
            {exercisePlan.map((plan, index) => (
              <tr key={index}>
                <td className="border-b py-2">{plan.day}</td>
                <td className="border-b py-2">{plan.routine}</td>
                <td className="border-b py-2">{meditationPlan[index].duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Sleep Routine</h3>
        <p><strong>Target Hours of Sleep:</strong> {sleepRoutine.targetHours}</p>
        <ul className="list-disc pl-6 mt-2">
          {sleepRoutine.recommendations.map((rec, index) => (
            <li key={index} className="py-1">{rec}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NewTrack;
