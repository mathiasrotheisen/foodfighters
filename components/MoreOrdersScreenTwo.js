import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class MoreOrdersScreenTwo extends React.Component {
    render() {
      return (
        <View style = {styles.container}>
            
            <View style = {styles.container2}>
                <Image style = {styles.pic} source={require('../assets/ryebread.png')}/>
                <Text style={styles.header}>Order Status</Text>
                <Text style = {{marginBottom: 4}}>Collected</Text>
            </View>
            <Text style = {styles.header}>Order Information</Text>
            <Text>Homemade ryebread</Text>
            <Text>Total: 5 kr.</Text>
            <Text>Morten de Fries Danielsen</Text>
            <Text>Finsensvej 21, 2000 Frederiksberg</Text>
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