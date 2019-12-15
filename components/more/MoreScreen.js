import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { List, ListItem, Button, ThemeConsumer } from 'react-native-elements';


const list = [
  {
    name: 'Profil',
    screen: 'MoreProfileScreen'
  },
  {
    name: 'Ordre',
    screen: 'MoreOrdersScreen'
  },
  {
    name: 'Mine annoncer',
    screen: 'MoreAddsScreen'
  },
  {
    name: 'Kontakt os',
    screen: 'MoreContactScreen'
  },
  {
    name: 'Log ud',
    screen: 'LoginScreen'
  },
]

export default class MoreScreen extends React.Component {
  goToOtherScreen(screen) {
    this.props.navigation.navigate(screen);
 }
  
  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <TouchableOpacity>
      <ListItem
        title={item.name}
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
  list: {
    
  },
});

  
