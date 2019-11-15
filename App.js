import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Constants from 'expo-constants';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

// You can import from local files
import HomeScreen from './components/HomeScreen';
import SecondScreen from './components/SecondScreen';
import UserProfileScreens from './components/UserProfileScreens';
import { createStackNavigator } from 'react-navigation-stack';

//import { Card } from 'react-native-paper';

const stackNavigator = createStackNavigator(
  {
    HomeScreen : { screen: HomeScreen },
    ProfileScreen: { screen: UserProfileScreens },
  }
);

const tabNavigator = createBottomTabNavigator(
  {
    Home: stackNavigator,
    Extra: SecondScreen,
  },
  { tabBarOptions: { labelStyle: { fontSize: 24 } } }
);

export default createAppContainer(tabNavigator);

const styles = StyleSheet.create({
  
});
