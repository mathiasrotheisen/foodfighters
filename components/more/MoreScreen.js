import * as React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';


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
  
  keyExtractor = (index) => index.toString()

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
      <FlatList
        keyExtractor={this.keyExtractor}
        data={list}
        renderItem={this.renderItem}
      />
    )
  }
}