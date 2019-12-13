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
        <Text style={styles.header}>How can we help you?</Text>
        <Text style={styles.text}>Select a category:</Text>
        <Picker style={{marginTop: -30}} selectedValue = {this.state.option} onValueChange = {this.selectedOption}>
               <Picker.Item label = "Bad experience with an order" value = "1"/>
               <Picker.Item label = "Question about the app" value = "2"/>
               <Picker.Item label = "Other" value = "3" />
        </Picker>
        <Text style={styles.text}>Message:</Text>
        <TextInput style={styles.textbox}
            placeholder="Type your message here"
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
