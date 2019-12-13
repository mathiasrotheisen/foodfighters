import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Item6Screen extends React.Component {
    render() {
      return (
        <View style = {styles.container}>
          <View style = {styles.container2}>
            <Image style = {styles.pic} source={require('/Users/Morten/Documents/Inno/react-native-projects/foodfighters/assets/grapes.png')}/>
            <Text style = {styles.header}>Produktinformation</Text>
            <Text>Vindruer</Text>
            <Text>5 kr.</Text>
            <Text>Bedst før: 10/1/2020</Text>
          </View>
          <Text style = {styles.header}>Kontaktoplysninger</Text>
          <Text>Jessica J.</Text>
          <Text>+45 12 34 56 78</Text>
          <Text>2200, København N</Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
    },
    pic: {
        width: 350,
        height: 200,
      },
      header: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 4
      },
    container2: {
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingBottom: 4,
    },
  });