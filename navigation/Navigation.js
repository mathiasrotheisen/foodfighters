import React from 'react';
import { StyleSheet, Image } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// You can import from local files
// Login
import Login from '../components/login/Login'
import LoginScreen from '../components/login/LoginScreen'
// Home
import HomeScreen from '../components/home/HomeScreen';
import Item1Screen from '../components/home/items/Item1Screen';
import Item2Screen from '../components/home/items/Item2Screen';
import Item3Screen from '../components/home/items/Item3Screen';
import Item4Screen from '../components/home/items/Item4Screen';
import Item5Screen from '../components/home/items/Item5Screen';
import Item6Screen from '../components/home/items/Item6Screen';
import Item7Screen from '../components/home/items/Item7Screen';
import Item8Screen from '../components/home/items/Item8Screen';
import Item9Screen from '../components/home/items/Item9Screen';
import Item10Screen from '../components/home/items/Item10Screen';
// Map
import MapScreen from '../components/map/MapScreen';
// Add
import AddScreen from '../components/add/AddScreen';
import AddScreenTwo from '../components/add/AddScreenTwo';
// More
import MoreScreen from '../components/more/MoreScreen';
import MoreProfileScreen from '../components/more/MoreProfileScreen';
import MoreOrdersScreen from '../components/more/MoreOrdersScreen';
import Order1Screen from '../components/more/orders/Order1Screen';
import MoreAddsScreen from '../components/more/MoreAddsScreen';
import Add1Screen from '../components/more/adds/Add1Screen';
import Add2Screen from '../components/more/adds/Add2Screen';
import MoreContactScreen from '../components/more/MoreContactScreen';

const homeStackNavigator = createStackNavigator(
  {
    HomeScreen : { screen: HomeScreen },
    Item1Screen : { screen: Item1Screen },
    Item2Screen : { screen: Item2Screen },
    Item3Screen : { screen: Item3Screen },
    Item4Screen : { screen: Item4Screen },
    Item5Screen : { screen: Item5Screen },
    Item6Screen : { screen: Item6Screen },
    Item7Screen : { screen: Item7Screen },
    Item8Screen : { screen: Item8Screen },
    Item9Screen : { screen: Item9Screen },
    Item10Screen : { screen: Item10Screen },
  },
);

const mapStackNavigator = createStackNavigator(
  {
    MapScreen : { screen : MapScreen },
  }
);

const addStackNavigator = createStackNavigator(
  {
    AddScreen : { screen : AddScreen },
    AddScreenTwo : { screen : AddScreenTwo },
  }
);

const moreStackNavigator = createStackNavigator(
  {
    MoreScreen : { screen : MoreScreen },
    MoreProfileScreen: { screen: MoreProfileScreen},
    MoreOrdersScreen: { screen: MoreOrdersScreen},
    Order1Screen: { screen: Order1Screen},
    MoreAddsScreen: { screen: MoreAddsScreen },
    Add1Screen: { screen: Add1Screen },
    Add2Screen: { screen: Add2Screen },
    MoreContactScreen: { screen: MoreContactScreen },
  }
);

function getTabBarIcon(routeName, color) {
  switch (routeName) {
    case 'Køb':
      return (
        <Image 
          style ={[styles.tabIcon, {tintColor: color }]}
          source={require('../assets/list.png')}
        />
      );
    case 'Kort':
      return (
        <Image
          style ={[styles.tabIcon, {tintColor: color }]}
          source={require('../assets/map.png')}
        />
      );
    case 'Tilføj':
      return (
        <Image
          style ={[styles.tabIcon, {tintColor: color }]}
          source={require('../assets/camera.png')}
        />
      );
    case 'Mere':
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
    Køb: homeStackNavigator,
    Kort: mapStackNavigator,
    Tilføj: addStackNavigator,
    Mere: moreStackNavigator,
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
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Login: Login,
      LoginScreen: LoginScreen,
      HomeScreen: tabNavigator
    },
    {
      initialRouteName: 'LoginScreen',
    }
  )
);

const styles = StyleSheet.create({
  tabIcon: {
    width: 32,
    height: 32,
  },
});