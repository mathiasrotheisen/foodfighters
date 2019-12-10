import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

export default class MoreProfileScreen extends React.Component {
  state = {
    picText: '',
    price: '',
    town: ''
}

handlePicText = (text) => {
  this.setState({ picText: text })
}

render() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> Information </Text>
      <TextInput style = {styles.input}
          placeholder = " Name"
          onChangeText = {this.handlePicText}
      />

      <TextInput style = {styles.input}
          placeholder = " Password"
          onChangeText = {this.handlePicText}
      />

      <TextInput style = {styles.input}
          placeholder = " E-mail"
          onChangeText = {this.handlePicText}
      />

      <TextInput style = {styles.input}
          placeholder = " Phonenumber"
          onChangeText = {this.handlePicText}
      />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
},
  header: {
    fontWeight: 'bold',
    textAlign: 'left',
  },
  input: {
    margin: 5,
    height: 40,
    width: '100%',
    borderWidth: 1,
    textAlign: 'left',
 }
});
