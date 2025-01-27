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

# test_path = 'test_set'

model = load_model('model/my_model.h5') 
real_label = []
predicted_class = []

le = LabelEncoder()

# Fit the LabelEncoder to your data
# folders = os.listdir(test_path)
# le.fit(folders)

class_labels = ['BA- cellulitis', 'BA-impetigo', 'FU-athlete-foot', 'FU-nail-fungus','FU-ringworm','PA-cutaneous-larva-migrans','VI-chickenpox','VI-shingles']  # replace with your actual class labels
le.fit(class_labels)

# for folder in folders:
    # folder_path = os.path.join(test_path, folder)
    # for file in os.listdir(folder_path):
        # file_path = os.path.join(folder_path, file)
file_path = "test_images/image2.jpg"
img = cv2.imread(file_path)
img = cv2.resize(img, (224,224))
img = preprocess_input(np.array([img]))  # Add an extra dimension for batchin
predictions = model.predict(img)
# real_label.append(folder)
predicted_class_index = np.argmax(predictions)

# Transform predicted class index back to class label
# predicted_class.append(le.inverse_transform([predicted_class_index])[0])
predicted_class_label = le.inverse_transform([predicted_class_index])[0]
# Print the actual and predicted class labels
# for i in range(len(class_labels)-1):
    # print("Actual:", real_label[i], "Predicted:", predicted_class[i])
print("Predicted class label:", predicted_class_label)
