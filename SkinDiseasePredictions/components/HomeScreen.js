import React, { useState, useEffect, useRef } from 'react';
import { useNavigation,useIsFocused } from '@react-navigation/native';
import { Camera } from 'expo-camera';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import Header from './Header';
import axios from 'axios';
import { useFonts, Poppins_400Regular, Poppins_300Light, Poppins_700Bold, Poppins_900Black } from '@expo-google-fonts/poppins';
// import { withNavigationFocus } from 'react-navigation';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);
  const isFocused = useIsFocused();
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_300Light,
    Poppins_700Bold,
    Poppins_900Black,
  });

  useEffect(() => {
    const initializeCamera = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    };
    initializeCamera();
    return () => {
    };
  }, []);


  const takePicture = async () => {
    console.log(1111)
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        console.log('Photo:', photo);
        predictDisease(photo);
        // Process the captured photo as needed
        // Navigate to the DetectedDisease screen with the captured photo data
        navigation.navigate('DetectedDisease', { id:1,imageData: photo });
      } catch (error) {
        console.error('Error taking photo:', error);
      }
    }
  };
  const predictDisease = async (image) => {
    imageUri = image.uri
    try {
      const formData = new FormData();
      formData.append('image', {
        uri: imageUri,
        name: 'image.jpg',
        type: 'image/jpg',
      });

      const response = await axios.post('http://192.168.194.31:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const predictedIndex = response.data;
      console.log(predictedIndex)
      navigation.navigate('DetectedDisease', { id: predictedIndex + 1, imageData: image });
    } catch (error) {
      console.error('Prediction error:', error);
      Alert.alert('Error', 'Failed to predict disease');
    }
  };


  return (
    <View style={styles.container}>
      {isFocused && <Camera style={styles.camera} ref={cameraRef}></Camera>}
      <Header navigation={navigation} />
      <View style={styles.footer} onTouchStart={takePicture}>
        <TouchableOpacity style={{ borderRadius: 30, backgroundColor: 'rgb(97,72,194)', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingVertical: 14, paddingHorizontal: 20 }}>
          <Ionicons name="scan" size={24} color="white" style={{ borderRadius: 50 }} />
          <Text style={{fontFamily: 'Poppins_700Bold', color: 'white', fontSize: 18, marginLeft: 15, letterSpacing: 1.9 }}>Start Scan</Text>
        </TouchableOpacity>
      </View>
      <Image style={{ position:'absolute',top:260,borderRadius: 80,width: 350, height: 350, alignSelf:'center',alignContent:'center',alignItems:'center',justifyContent:'center' }} source={require('../assets/scanner2.gif')}/>
      {/* <Ionicons name="scan-outline" size={254} color="white" style={{ position:'absolute',top:50,borderRadius: 50 }} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  camera: {
    flex: 1,
    aspectRatio: 3 / 4
  },
  header: {
    position: 'absolute',
    top: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 20
  },
  footer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20,
    bottom: 10,
  }
});

export default HomeScreen;
