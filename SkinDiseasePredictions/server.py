from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np
import numpy as np
import os
import cv2
import random
import matplotlib.pyplot as plt

from tensorflow.keras.applications import ResNet50
from tensorflow.keras.applications.resnet50 import preprocess_input
from tensorflow.keras.models import Model
from tensorflow.keras.layers import GlobalAveragePooling2D, Dense

from tensorflow.keras.models import load_model
from sklearn.preprocessing import LabelEncoder
from tensorflow.keras.utils import to_categorical


app = Flask(__name__)

# Load the pre-trained model
model = load_model('my_model.h5')  # Replace 'your_model.h5' with the path to your model file
real_label = []
predicted_class = []

le = LabelEncoder()

# Define your classes or labels
class_labels = ['BA- cellulitis', 'BA-impetigo', 'FU-athlete-foot', 'FU-nail-fungus','FU-ringworm','PA-cutaneous-larva-migrans','VI-chickenpox','VI-shingles']

# Define function to preprocess the image
def preprocess_image(image):
    # Resize the image to match the input size of your model
    image = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)
    img = cv2.resize(image, (224,224))  # Adjust the size as per your model's input shape
    # Convert image to numpy array
    img = preprocess_input(np.array([img]))
    # Normalize pixel values to be between 0 and 1
    return img


# Define route for image prediction
@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'})

    image_file = request.files['image']
    image = Image.open(image_file)

    # Log information about the received image
    print('Received image:')
    print('Size:', image.size)
    print('Data type:', image.mode)

    # Save the received image to disk for visual inspection
    image.save('received_image.jpg')  # Save the image in JPEG format


    # Preprocess the image
    processed_image = preprocess_image(image)

    # Make prediction
    prediction = model.predict(processed_image)
    predicted_class_index = np.argmax(prediction)
    print("\n\n\n",predicted_class_index)
    # predicted_class = classes[predicted_class_index]

    return str(predicted_class_index), 200

if __name__ == '__main__':
    # app.run(debug=True)
    # Run the Flask app on your local network IP address
    # Replace '0.0.0.0' with your actual IP address (e.g., '192.168.x.x')
    app.run(debug=True,host='192.168.194.31', port=5000)
