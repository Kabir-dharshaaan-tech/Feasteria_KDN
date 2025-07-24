import React, { useState } from 'react';

const BMI = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    if (!weight || !height) {
      setMessage("Please enter both height and weight.");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));

    if (bmiValue < 18.5) {
      setMessage("You are underweight 🥗");
    } else if (bmiValue < 24.9) {
      setMessage("You have a healthy weight 🥦");
    } else if (bmiValue < 29.9) {
      setMessage("You are overweight 🍔");
    } else {
      setMessage("You are obese 🍕");
    }
  };

  const resetFields = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md border-2 border-orange-300">
        <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">🍊 BMI Calculator</h2>

        <div className="mb-4">
          <label className="block text-orange-700 font-semibold mb-1">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter weight"
            className="w-full px-4 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-orange-700 font-semibold mb-1">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter height"
            className="w-full px-4 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="flex justify-between space-x-3">
          <button
            onClick={calculateBMI}
            className="w-1/2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-lg transition duration-200"
          >
            Calculate
          </button>
          <button
            onClick={resetFields}
            className="w-1/2 bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 rounded-lg transition duration-200"
          >
            Reset
          </button>
        </div>

        {bmi && (
          <div className="mt-6 text-center">
            <p className="text-xl text-orange-700 font-semibold">
              Your BMI: <span className="font-bold text-2xl">{bmi}</span>
            </p>
            <p className="text-md mt-2 text-gray-700">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMI;
