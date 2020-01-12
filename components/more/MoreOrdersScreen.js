import * as React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';

const list = [
  {
    title: 'Hjemmelavet rugbrød',
    subtitle: 'Besilt: 7/12/2019',
    screen: 'Order1Screen'
  },
]

export default class MoreOrdersScreen extends React.Component {
  goToOtherScreen(screen) {
    this.props.navigation.navigate(screen);
 }
  
  keyExtractor = (index) => index.toString()

  renderItem = ({ item }) => (
    <TouchableOpacity>
      <ListItem
        title={item.title}
        subtitle={item.subtitle}
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