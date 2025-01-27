import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_300Light,
  Poppins_700Bold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins';



const App = () => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_300Light,
    Poppins_700Bold,
    Poppins_900Black,
  });
  // const Drawer = createDrawerNavigator();
  // const Stack = createNativeStackNavigator();

  // function CustomDrawerContent(props) {
  //   return (
  //     <View style={styles.drawerContent}>
  //       <Text style={styles.drawerItem} onPress={() => props.navigation.navigate('Home')}>
  //         Home
  //       </Text>
  //       <Text style={styles.drawerItem} onPress={() => props.navigation.navigate('SearchDisease')}>
  //         Search Disease
  //       </Text>
  //       <Text style={styles.drawerItem} onPress={() => props.navigation.navigate('NearbyClinics')}>
  //         Nearby Clinics
  //       </Text>
  //       <Text style={styles.drawerItem} onPress={() => props.navigation.navigate('Help')}>
  //         Help
  //       </Text>
  //       <Text style={styles.drawerItem} onPress={() => props.navigation.navigate('About')}>
  //         About
  //       </Text>
  //     </View>
  //   );
  // }

  // function DrawerNavigator() {
  //   return (
  //     <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
  //       <Drawer.Screen name="Home" component={HomeScreen} />
  //       <Drawer.Screen name="SearchDisease" component={SearchScreen} />
  //       <Drawer.Screen name="NearbyClinics" component={NearbyClinicsScreen} />
  //       <Drawer.Screen name="Help" component={HelpScreen} />
  //       <Drawer.Screen name="About" component={AboutScreen} />
  //     </Drawer.Navigator>
  //   );
  // }

  return (<AppNavigator>
    {/* <DrawerNavigator /> */}
  </AppNavigator>);
};

export default App;
