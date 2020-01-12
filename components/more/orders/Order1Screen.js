import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Order1Screen extends React.Component {
    render() {
      return (
        <View style = {styles.container}>
            <View style = {styles.container2}>
                <Image style = {styles.pic} source={require('../../../assets/ryebread.png')}/>
                <Text style={styles.header}>Ordrestatus</Text>
                <Text style = {{marginBottom: 4}}>Afhentet</Text>
            </View>
            <Text style = {styles.header}>Ordreinformation</Text>
            <Text>Hjemmelavet rugbrød</Text>
            <Text>5 kr.</Text>
            <Text>Købt af: Morten D.</Text>
            <Text>+45 12 34 56 78</Text>
            <Text>2000 Frederiksberg</Text>
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