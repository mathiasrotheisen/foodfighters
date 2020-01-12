import * as React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';

const list = [
  {
    title: 'Yoghurt',
    subtitle: 'Oprettet: 10/12/2019',
    screen: 'Add1Screen'
  },
  {
    title: 'En halv pose løg',
    subtitle: 'Oprettet: 5/12/19',
    screen: 'Add2Screen'
  },
]

export default class MoreAddsScreen extends React.Component {
  goToOtherScreen(screen) {
    this.props.navigation.navigate(screen);
 }
  
  keyExtractor = (item, index) => index.toString()

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