import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class MoreOrdersScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          OrdersScreen
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
  }
});
