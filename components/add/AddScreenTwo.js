import * as React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';

export default class AddScreenTwo extends React.Component {
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
            placeholder = "Information"
            onChangeText = {this.handlePicText}
        />

        <TextInput style = {styles.input}
            placeholder = "Pris"
            onChangeText = {this.handlePrice}
        />

        <TextInput style = {styles.input}
            placeholder = "Bedst før"
            onChangeText = {this.handleTown}
        />

        <TouchableOpacity style = {styles.submitButton}>
            <Button title="Tilføj" onPress={this.handleAddPhoto} /> 
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
        margin: 5,
        height: 40,
        width: '100%',
        borderWidth: 1,
        textAlign: 'left'
     },
      submitButton: {
          margin: 5,
          height: 40,
   }
  });