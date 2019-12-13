import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';

export default class MoreProfileScreen extends React.Component {
  handleAddPhoto = () => {
    // Vi navigerer til HomeScreen skærmen
    this.props.navigation.navigate('MoreScreen');
   };


render() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> Information </Text>
      <TextInput style = {styles.input}
          placeholder = "Name"
          defaultValue = "Mathias Rotheisen"
      />

      <TextInput style = {styles.input}
          placeholder = "Password"
          defaultValue = "******"
      />

      <TextInput style = {styles.input}
          placeholder = "E-mail"
          defaultValue = "mattiboy@live.dk"
      />

      <TextInput style = {styles.input}
          placeholder = "Phonenumber"
          defaultValue = "+45 88 88 88 88"
      />
      <TouchableOpacity style = {styles.submitButton}>
          <Button title="Save changes" onPress={this.handleAddPhoto} /> 
      </TouchableOpacity>
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
  },
  input: {
    margin: 5,
    height: 40,
    width: '100%',
    borderWidth: 1,
    textAlign: 'left',
 },
 submitButton: {
     margin: 5,
     height: 40,
}
});
