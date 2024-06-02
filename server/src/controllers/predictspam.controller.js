import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/apiError.js';
import { ApiResponse } from '../utils/apiResponse.js';
import axios from 'axios';

const predictSpamSms = asyncHandler(async (req, res) => {
    const { text } = req.body;

    if (!text) {
        throw new ApiError(400, 'Text is required');
    }

    const response = await axios.post('http://127.0.0.1:5000/predict', { text }, {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });

    if (response.status !== 200) {
        throw new ApiError(500, 'Failed to predict');
    }

    return res.status(200).json(new ApiResponse(200, response.data));
});

export { predictSpamSms };