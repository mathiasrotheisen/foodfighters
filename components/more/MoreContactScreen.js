import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Picker, TextInput, TouchableOpacity , Button } from 'react-native';

export default class MoreContactScreen extends React.Component {
    state = {option: ''}
    selectedOption = (option) => {
          this.setState({ option: option })
    }

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    handleSendMessage = () => {
        this.props.navigation.navigate('MoreScreen');
    };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Hvordan kan vi hjælpe dig?</Text>
        <Text style={styles.text}>Vælg en kategori:</Text>
        <Picker style={{marginTop: -30}} selectedValue = {this.state.option} onValueChange = {this.selectedOption}>
               <Picker.Item label = "Dårlig oplevelse med en ordre" value = "1"/>
               <Picker.Item label = "Spørgsmål om appen" value = "2"/>
               <Picker.Item label = "Andet" value = "3" />
        </Picker>
        <Text style={styles.text}>Besked:</Text>
        <TextInput style={styles.textbox}
            placeholder="Skriv besked her"
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            multiline={true}
            editable
            maxLength={20}
        />
        <TouchableOpacity style = {styles.submitButton}>
            <Button title="Send" onPress={this.handleSendMessage} /> 
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    },
  header: {
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 15,
    },
  text: {
      fontSize: 15,
    },
    textbox: {
        marginTop: 5,
        height: 100,
        borderWidth: 1,
    },
    submitButton: {
        margin: 5,
        height: 40,
 },
});
