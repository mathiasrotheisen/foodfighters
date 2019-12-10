import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

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
     
     handleAddPhoto = () => {
         // Vi navigerer til HomeScreen skærmen
         this.props.navigation.navigate('HomeScreen');
        };

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
               <Button style = {styles.submitButtonText} title="Tilføj" onPress={this.handleAddPhoto} /> 
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
    input: {
        margin: 15,
        height: 40,
        width: '80%',
        borderWidth: 1,
        textAlign: 'center'
     },
      submitButton: {
          margin: 15,
          height: 40,
   },
   submitButtonText:{
       color: 'black',
   }
  });