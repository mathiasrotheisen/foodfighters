import * as React from 'react';
import {
  Button,
  Text,
  View,
  TextInput,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from 'react-native';
import firebase from 'firebase';
  
  export default class LoginScreen extends React.Component {
    state = {
        email: '',
        password: '',
        isLoading: false,
        isCompleted: false,
        errorMessage: null,
      };
      startLoading = () => this.setState({ isLoading: true });
      endLoading = () => this.setState({ isLoading: false });
      setError = errorMessage => this.setState({ errorMessage });
      clearError = () => this.setState({ errorMessage: null });
      handleChangeEmail = email => this.setState({ email });
      handleChangePassword = password => this.setState({ password });
    
      handleSubmit = async () => {
        const { email, password } = this.state;
        try {
          this.startLoading();
          this.clearError();
          // Her kalder vi den rette funktion i firebase auth
          const result = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);
    
          console.log(result);
          this.endLoading();
          this.setState({ isCompleted: true });
        } catch (error) {
          this.setError(error.message);
          this.endLoading();
        }
      };
    
      render = () => {
        const { errorMessage, email, password, isCompleted } = this.state;
        if (isCompleted) {
          return this.props.navigation.navigate('HomeScreen');
        }
        return (
          <View>
            <View style={styles.container} >
                <Text style={styles.header}> Login</Text>
            </View>
            <TextInput
            placeholder="E-mail"
            value={email}
            onChangeText={this.handleChangeEmail}
            style={styles.inputField}
            />
            <TextInput
            placeholder="Kodeord"
            value={password}
            onChangeText={this.handleChangePassword}
            secureTextEntry
            style={styles.inputField}
            />
            {errorMessage && (
              <Text style={styles.error}>Error: {errorMessage}</Text>
            )}
            {this.renderButton()}
          </View>
        );
      };
    
      renderButton = () => {
        const { isLoading } = this.state;
        if (isLoading) {
          return <ActivityIndicator />;
        }
        return <Button onPress={this.handleSubmit} title="Login" />;
      };
    }

  const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 70,
    },
    container2: {
        //marginTop: 70,
    },
    error: {
      color: 'red',
    },
    inputField: {
      borderWidth: 1,
      borderRadius: 20,
      margin: 10,
      padding: 10,
    },
    header: {
      fontSize: 40,
    },
  });