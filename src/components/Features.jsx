import Button from "./Button";
import { Link } from 'react-router-dom';

function Feature ({  }) {
  return (
    <div className="text-center py-12 bg-gray-50 ">
      <h1 className="text-4xl font-bold mb-10">Empowering Your Health Journey <br/> One Step at a Time</h1>
      <div className="grid md:grid-cols-3 gap-8 px-4">
      

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Activity Monitoring</h2>
          <p className="mb-6 text-gray-600">Keep track of your daily steps, workouts, and physical activities.</p>
          <Link to="/activity-monitoring">
            <Button label={"Learn More"}/>
             
          </Link>
        </div>

        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Nutrition Planning</h2>
          <p className="mb-6 text-gray-600">Plan your meals and track your nutritional intake to maintain a balanced diet.</p>
          <Link to="/nutrition-planning">
          <Button label={"Learn More"}/>
          </Link>
        </div>

        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Mental Wellness</h2>
          <p className="mb-6 text-gray-600">Practice mindfulness and track your mental well-being with guided meditations.</p>
          <Link to="/mental-wellness">
          <Button label={"Learn More"}/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Feature;