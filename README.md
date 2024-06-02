# Spam SMS Detection Web Application

## Overview
This project is a web application designed to detect spam SMS messages. It utilizes machine learning techniques, specifically Scikit-learn for model training. The dataset used for training is sourced from Kaggle. The backend is built with Node.js, while Flask is used to create the endpoint for the machine learning model. On the frontend, React.js is employed for the user interface.

## Features
- Classification of SMS messages into spam or non-spam categories.
- User-friendly web interface for interacting with the application.
- Model training using Scikit-learn.
- RESTful API endpoint for model predictions.

## Installation
1. [Clone the repository](https://github.com/awesohame/sms-spam-detector.git)
2. Navigate to the project directory: `cd sms-spam-detector`
3. Install dependencies:
   - Backend (Node.js): `cd server && npm install`
   - Frontend (React.js): `cd client && npm install`
   - Python dependencies for Flask endpoint: `cd flask && pip install nltk scikit-learn flask flask_cors`

## Usage
1. **Start the Backend Server:**
   - Navigate to the `server` directory: `cd server`
   - Start the Node.js server: `npm run dev`

2. **Start the Frontend Server:**
   - Navigate to the `frontend` directory: `cd ../client`
   - Start the React.js development server: `npm run dev`

3. **Start the Flask ML Endpoint:**
   - Navigate to the root directory: `cd ../flask`
   - Run the Flask server: `python app.py`

4. **Access the Application:**
   - Open your web browser and go to `http://localhost:5173` to access the web application.

## Dataset
The dataset used for training the machine learning model is sourced from Kaggle. You can find it [here](https://www.kaggle.com/datasets/uciml/sms-spam-collection-dataset).

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:
1. Fork the repository
2. Create your feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## Acknowledgements
- Thanks to Kaggle for providing the dataset.
- Special thanks to the creators and maintainers of Scikit-learn, Node.js, Flask, and React.js for their amazing tools and frameworks.
