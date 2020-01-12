import React from 'react';
import { View } from 'react-native';
import Fire from '../../database/Firebase';

class SignInScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {},
    }
  }
  
  authListener(){
    Fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user})
      }
      else {
        this.setState({user:null})
      }
    })
  }

  componentDidMount() {
    this.authListener()
  }

  render() {
    return (
      <View>
        {this.state.user ? this.props.navigation.navigate('HomeScreen') : this.props.navigation.navigate('LoginScreen')}
      </View>
        
    )
  }
}

export default SignInScreen;