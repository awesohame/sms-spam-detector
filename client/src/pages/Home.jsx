import React, { useState } from 'react';
import axios from 'axios';
import { twMerge } from 'tailwind-merge';
function App() {
    const [inputText, setInputText] = useState('');
    const [prediction, setPrediction] = useState(null);

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/v1/predict/sms', { text: inputText });
            console.log(response);
            setPrediction(response.data.data.result === 1 ? 'Spam' : 'Not Spam');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const conditionalClasses = prediction === 'Spam' ? 'bg-red-500' : 'bg-green-500';

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-700 text-white p-8">
            <h1 className="text-4xl font-bold mb-8">SMS Spam Detector</h1>
            <textarea
                className="w-full max-w-xl p-4 border border-gray-300 rounded mb-8 text-black h-48 text-lg"
                value={inputText}
                placeholder='Enter SMS text here...'
                onChange={handleInputChange}
                rows="5"
            />
            <div className="w-full max-w-xl text-left">
                <button
                    className="bg-blue-500 px-6 py-3 rounded text-lg"
                    onClick={handleSubmit}
                >
                    Predict
                </button>
            </div>
            {prediction && (
                <div className={twMerge(`mt-8 w-full max-w-xl p-4 rounded text-black h-16 flex items-center justify-center transition duration-500 ease-in-out`, conditionalClasses)}>
                    <h2 className="text-3xl">{prediction}</h2>
                </div>
            )}
        </div>
    );
}

export default App;
