import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Constants from 'expo-constants';
import {createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

// You can import from local files
import HomeScreen from './components/HomeScreen';
import SecondScreen from './components/SecondScreen';

//import { Card } from 'react-native-paper';

const tabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Extra: SecondScreen,
  },
  { tabBarOptions: { labelStyle: { fontSize: 24 } } }
);

export default createAppContainer(tabNavigator);

const styles = StyleSheet.create({
  
});
