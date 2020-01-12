import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Add2Screen extends React.Component {
    render() {
      return (
        <View style = {styles.container}>
            <View style = {styles.container2}>
                <Image style = {styles.pic} source={require('../../../assets/onions.png')}/>
                <Text style={styles.header}>Produktstatus</Text>
                <Text>Bestilt, ikke afhentet</Text>
            </View>
            <Text style = {styles.header}>Produktinformation</Text>
            <Text>En halv pose løg</Text>
            <Text>1 kr.</Text>
            <Text>Bedst før: 1/2/2020</Text>
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