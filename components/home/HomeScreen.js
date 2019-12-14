import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { List, ListItem, Button, ThemeConsumer, Avatar } from 'react-native-elements';

const list = [
  {
    title: '2 kg gulerødder',
    subtitle: '5 kr.\n2100, København Ø',
    picture: require('/Users/Morten/Documents/Inno/react-native-projects/foodfighters/assets/carrots.png'),
    screen: 'Item1Screen' 
  },
  {
    title: 'Pakke smør',
    subtitle: '1 kr.\n2000, Frederiksberg',
    picture: require('/Users/Morten/Documents/Inno/react-native-projects/foodfighters/assets/butter.png'),
    screen: 'Item2Screen'
  },
  {
    title: 'Et halvt rugbrød fra bageren',
    subtitle: '1 kr.\n2000, Frederiksberg',
    picture: require('/Users/Morten/Documents/Inno/react-native-projects/foodfighters/assets/ryebread2.png'),
    screen: 'Item3Screen'
  },
  {
    title: 'Yoghurt',
    subtitle: '5 kr.\n2200, København N',
    picture: require('/Users/Morten/Documents/Inno/react-native-projects/foodfighters/assets/yoghurt.png'),
    screen: 'Item4Screen'
  },
  {
    title: 'En pakke levepostej',
    subtitle: '5 kr.\n2200, København N',
    picture: require('/Users/Morten/Documents/Inno/react-native-projects/foodfighters/assets/pate.png'),
    screen: 'Item5Screen'
  },
  {
    title: 'Vindruer',
    subtitle: '5 kr.\n2200, København N',
    picture: require('/Users/Morten/Documents/Inno/react-native-projects/foodfighters/assets/grapes.png'),
    screen: 'Item6Screen'
  },
  {
    title: 'Stykke entrecote',
    subtitle: '80 kr.\n2000, Frederiksberg',
    picture: require('/Users/Morten/Documents/Inno/react-native-projects/foodfighters/assets/entrecote.png'),
    screen: 'Item7Screen'
  },
  {
    title: 'Halv pose boller fra Kohberg',
    subtitle: '1 kr.\n2000, Frederiksberg',
    picture: require('/Users/Morten/Documents/Inno/react-native-projects/foodfighters/assets/buns.png'),
    screen: 'Item8Screen'
  },
  {
    title: 'Ketchup',
    subtitle: '5 kr.\n1500, København V',
    picture: require('/Users/Morten/Documents/Inno/react-native-projects/foodfighters/assets/ketchup.png'),
    screen: 'Item9Screen'
  },
  {
    title: '6-pakke æg',
    subtitle: '5 kr.\n1500, København V',
    picture: require('/Users/Morten/Documents/Inno/react-native-projects/foodfighters/assets/eggs.png'),
    screen: 'Item10Screen'
  },
]

export default class HomeScreen extends React.Component {
  goToOtherScreen(screen) {
    this.props.navigation.navigate(screen);
 }
  
  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <TouchableOpacity>
      <ListItem
        title={item.title}
        subtitle={item.subtitle}
        //leftAvatar={{ source: { uri: item.picture }} }
        leftAvatar={<Avatar rounded source={item.picture} height={`100%`} width={`25%`} />}
        onPress={() => this.goToOtherScreen(item.screen)}
        bottomDivider
        // The arrow at the right
        chevron
      />
    </TouchableOpacity>
  )
  
  render () {
    return (
      <FlatList style = {styles.list}
        keyExtractor={this.keyExtractor}
        data={list}
        renderItem={this.renderItem}
      />
    )
  }
}

const styles = StyleSheet.create({
  pic: {
    width: 50
  },
});

  
