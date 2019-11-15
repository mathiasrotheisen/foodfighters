import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Constants from 'expo-constants';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// You can import from local files
import HomeScreen from '../components/HomeScreen';
import SecondScreen from '../components/SecondScreen';
import UserProfileScreens from '../components/UserProfileScreens';
import MoreScreen from '../components/MoreScreen';

//import { Card } from 'react-native-paper';

const stackNavigator = createStackNavigator(
  {
    HomeScreen : { screen: HomeScreen },
    ProfileScreen: { screen: UserProfileScreens },
  }
);

const styles = StyleSheet.create({
  tabIcon: {
    width: 32,
    height: 32,
  },
});

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
    Map: SecondScreen,
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