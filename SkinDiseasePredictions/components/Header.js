import React, { useState, useEffect, useRef } from 'react';
import { Button, View, SafeAreaView, Text, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons';
import MenuScreen from './MenuScreen';
// import { BlurView } from '@react-native-community/blur';

const Header = ({ navigation }) => {

  const [isMenuVisible, setMenuVisible] = useState(false);
  const screenWidth = Dimensions.get('window').width;
  const translateX = new Animated.Value(-screenWidth);

  const toggleMenu = () => {
    if (isMenuVisible) {
      Animated.timing(translateX, {
        toValue: -screenWidth,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setMenuVisible(false));
    } else {
      setMenuVisible(true);
      Animated.timing(translateX, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };


  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Ionicons onPress={toggleMenu} name="menu" color="white" size={24} style={{ backgroundColor: 'rgb(97,72,194)', padding: 15, borderRadius: 50 }} />
        <Ionicons onTouchStart={() => navigation.navigate('SearchDisease')} name="search" size={24} color="white" style={{ backgroundColor: 'rgb(97,72,194)', padding: 15, borderRadius: 50 }} />
      </View>
      {isMenuVisible && (
        <Animated.View style={[styles.menuContainer, { transform: [{ translateX }] }]}>
          <MenuScreen onClose={toggleMenu} />
        </Animated.View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width:'100%',
    height:'100%'
  },
  menuContainer:{
    zIndex:1,
    borderRadius:400,
    top:0
  },
  camera: {
    flex: 1,
  },
  cameraOverlay: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    flex: 1,
    position: 'absolute',
    top: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    // height:'100%',
    padding: 20,
    // zIndex:1,
    // backgroundColor:'red',
  },
  footer: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20,
    bottom: 10
  }
});

export default Header;
