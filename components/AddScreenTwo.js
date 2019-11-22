import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default class AddScreenTwo extends React.Component {
    state = {
        picText: '',
        price: '',
        town: ''
    }

    handlePicText = (text) => {
        this.setState({ picText: text })
     }

     handlePrice = (text) => {
        this.setState({ price: text })
     }

     handleTown = (text) => {
        this.setState({ town: text })
     }
    
    render() {
    return (
      <View style={styles.container}>
        <TextInput style = {styles.input}
            placeholder = " Billedetekst"
            onChangeText = {this.handlePicText}
        />

        <TextInput style = {styles.input}
            placeholder = " Pris"
            onChangeText = {this.handlePicText}
        />

        <TextInput style = {styles.input}
            placeholder = " By"
            onChangeText = {this.handlePicText}
        />

        <TouchableOpacity
               style = {styles.submitButton}>
               <Text style = {styles.submitButtonText}> Tilføj </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 100,
    },
    input: {
        margin: 20,
        height: 40,
        width: '150%',
        borderWidth: 1
     },
      submitButton: {
          borderWidth: 1,
          padding: 10,
          margin: 15,
          height: 40,
   },
   submitButtonText:{
       color: 'black'
   }
  });