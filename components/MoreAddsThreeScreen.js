import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class MoreAddsThreeScreen extends React.Component {
    render() {
      return (
        <View style = {styles.container}>
            
            <View style = {styles.container2}>
                <Image style = {styles.pic} source={require('../assets/grapes.png')}/>
                <Text style={styles.header}>Product Status</Text>
                <Text style = {{marginBottom: 4}}>Ordered, not collected</Text>
            </View>
            <Text style = {styles.header}>Product Information</Text>
            <Text>Grapes</Text>
            <Text>Expires at app. 22th December 2019</Text>
            <Text>Total: 5 kr.</Text>
            <Text>Mathias Rotheisen</Text>
            <Text>+45 88 88 88 88</Text>
            <Text>Lygten 2, 2200 København N</Text>
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
    },
  });