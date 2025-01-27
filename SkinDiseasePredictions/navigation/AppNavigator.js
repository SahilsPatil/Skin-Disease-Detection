import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../components/SplashScreen';
import HomeScreen from '../components/HomeScreen';
import CameraScreen from '../components/CameraScreen';
import DetectedDiseaseScreen from '../components/DetectedDiseaseScreen';
import NearbyClinicsScreen from '../components/NearbyClinicsScreen';
import SearchDiseaseScreen from '../components/SearchDiseaseScreen';
import MenuScreen from '../components/MenuScreen';
import Header from '../components/Header';
// Import additional screens or components if needed

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" headerMode="true" screenOptions={{
    headerShown: true,
    // other options
  }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="DetectedDisease" component={DetectedDiseaseScreen} />
        {/* <Stack.Screen name="NearbyClinics" component={NearbyClinicsScreen} /> */}
        <Stack.Screen name="SearchDisease" component={SearchDiseaseScreen} />
        <Stack.Screen name="Header" component={Header} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        {/* Add additional screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
