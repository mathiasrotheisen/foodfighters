import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { List, ListItem, Button, ThemeConsumer } from 'react-native-elements';


const list = [
  {
    name: 'Profile',
    ScreenName: 'MoreProfileScreen'
  },
  {
    name: 'Orders',
    ScreenName: 'MoreOrdersScreen'
  },
  {
    name: 'My adds'
  },
  {
    name: 'Contact us'
  },
  {
    name: 'Sign out'
  },
]

export default class MoreScreen extends React.Component {
  goToOtherScreen(ScreenName) {
    this.props.navigation.navigate(ScreenName);
 }
  
  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <TouchableOpacity>
      <ListItem
        title={item.name}
        onPress={() => this.goToOtherScreen(item.ScreenName)}
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
  list: {
    
  },
});

  
