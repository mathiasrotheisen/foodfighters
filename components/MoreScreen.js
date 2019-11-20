import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class MoreScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          MoreScreen
        </Text>
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
    paragraph: {
      margin: 24,
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });