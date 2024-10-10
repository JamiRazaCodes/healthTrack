import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button';



function Billing({ pricing }) {
    const navigate = useNavigate();
    const goBack = () => navigate('/');

  const { planId } = useParams();
  const plan = pricing.find((p) => p.plan.toLowerCase() === planId);

  if (!plan) {
    return <h2>Plan not found</h2>;
  }

  return (
    <div className="container mx-auto py-24 flex justify-center">
      <div className="w-1/2 p-4">
        <h1 className="text-4xl font-bold mb-4">Billing for {plan.plan} Plan</h1>
        <div className="border p-4 rounded mb-4">
          <h2 className="text-3xl mb-2">{plan.plan}</h2>
          <p className="text-xl mb-2">Price: {plan.price}/mo</p>
          <h3 className="text-2xl mb-2">Features:</h3>
          <ul>
            {plan.features.map((feature, index) => (
              <li key={index} className="text-lg">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-1/2 p-4">
        <h2 className="text-4xl font-bold mb-4">Billing Information</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="card">
              Credit Card
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="card"
              type="text"
              placeholder="Card Number"
            />
          </div>
          <Button label={"Complete Purchase"} />
          <button onClick={goBack} className="mt-4 ml-1.5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline">
            Go Back</button>
        </form>
      </div>
    </div>
  );
}

export default Billing;
