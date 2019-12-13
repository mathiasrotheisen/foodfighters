import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { List, ListItem, ThemeConsumer } from 'react-native-elements';


const list = [
  {
    name: 'Unopened Skyr\nPublished: 10th December 2019',
    screen: 'MoreAddsOneScreen'
  },
  {
    name: 'Unopened paté\nPublished: 5th December 2019',
    screen: 'MoreAddsTwoScreen'
  },
  {
    name: 'Grapes\nPublished: 17th December 2019',
    screen: 'MoreAddsThreeScreen'
  },
]

export default class MoreAddsScreen extends React.Component {
  goToOtherScreen(screen) {
    this.props.navigation.navigate(screen);
 }
  
  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <TouchableOpacity>
      <ListItem style = {styles.list}
        title={item.name}
        onPress={() => this.goToOtherScreen(item.screen)}
        bottomDivider
        chevron
      />
    </TouchableOpacity>
  )
  
  render () {
    return (
      <FlatList
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

  

