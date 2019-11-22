import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Constants from 'expo-constants';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// You can import from local files
import HomeScreen from '../components/HomeScreen';
import MapScreen from '../components/MapScreen';
import UserProfileScreens from '../components/UserProfileScreens';
import AddScreen from '../components/AddScreen';
import AddScreenTwo from '../components/AddScreenTwo';
import MoreScreen from '../components/MoreScreen';

//import { Card } from 'react-native-paper';

const stackNavigator = createStackNavigator(
  {
    HomeScreen : { screen: HomeScreen },
    ProfileScreen: { screen: UserProfileScreens },
  }
);

const addStackNavigator = createStackNavigator(
  {
    AddScreen : { screen : AddScreen },
    AddScreenTwo : { screen : AddScreenTwo },
  }
);

function getTabBarIcon(routeName, color) {
  switch (routeName) {
    case 'Home':
      return (
        <Image 
          style ={[styles.tabIcon, {tintColor: color }]}
          source={require('../assets/list.png')}
        />
      );
    case 'Map':
      return (
        <Image
          style ={[styles.tabIcon, {tintColor: color }]}
          source={require('../assets/map.png')}
        />
      );
    case 'Add':
      return (
        <Image
          style ={[styles.tabIcon, {tintColor: color }]}
          source={require('../assets/camera.png')}
        />
      );
    case 'More':
        return(
          <Image
            style ={[styles.tabIcon, {tintColor: color }]}
            source={require('../assets/more.png')}
          />
        );
    default:
        return null;
  }
}

const tabNavigator = createBottomTabNavigator(
  {
    Home: stackNavigator,
    Map: MapScreen,
    Add: addStackNavigator,
    More: MoreScreen,
  },

  {
    defaultNavigationOptions: ({ navigation }) => {
      
      return {
        tabBarIcon: ({ tintColor }) => {
        
          return getTabBarIcon(navigation.state.routeName, tintColor);
        },
      };
    },
  }
  //{ tabBarOptions: { labelStyle: { fontSize: 24 } } }
);

export default createAppContainer(tabNavigator);

const styles = StyleSheet.create({
  tabIcon: {
    width: 32,
    height: 32,
  },
});