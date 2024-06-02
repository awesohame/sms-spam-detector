import os
from flask import Flask, request, jsonify
import pickle
import nltk
import string
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer

nltk.download('stopwords')
nltk.download('punkt')


app = Flask(__name__)

# Load model and vectorizer
dir_path = os.path.dirname(os.path.realpath(__file__))
vectorizer_path = os.path.join(dir_path, 'vectorizer.pkl')
model_path = os.path.join(dir_path, 'model.pkl')

tfidf = pickle.load(open(vectorizer_path, 'rb'))
model = pickle.load(open(model_path, 'rb'))
ps = PorterStemmer()

# Text preprocessing function
def transform_text(text):
    text = text.lower()
    text = nltk.word_tokenize(text)

    y = []
    for i in text:
        if i.isalnum():
            y.append(i)

    text = y[:]
    y.clear()

    for i in text:
        if i not in stopwords.words('english') and i not in string.punctuation:
            y.append(i)

    text = y[:]
    y.clear()

    for i in text:
        y.append(ps.stem(i))

    return " ".join(y)

# PREDICTION ENDPOINT
@app.route('/predict', methods=['GET'])
def predict():
    text = request.args.get('text', '')

    transformed_sms = transform_text(text)
    vector_input = tfidf.transform([transformed_sms])
    result = model.predict(vector_input)[0]

    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
