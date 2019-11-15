import * as React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Linking,
  Button,
} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  container: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
});

export default class UserItem extends React.Component {
  // event handler som sender en email til den aktive user
  sendEmail = () => {
    const { user } = this.props;
    // Her benyttes en string template til at lave en gyldig email-url
    const emailUrl = `mailto:${user.email}`;
    Linking.openURL(emailUrl);
  };
  // Her kalder vi vores onSelect eventhandler, og som argument får den den user vi fik med ind i props.
  handleSelect = () => {
    const { user, onSelect } = this.props;
    onSelect(user);
  };
  render() {
    const { user } = this.props;
    //  Her håndteres overordnede klik på rækken

    return (
      <TouchableOpacity style={styles.container} onPress={this.handleSelect}>
        <Image style={styles.image} source={{ uri: user.picture.thumbnail }} />
        <Text>
          {user.name.first} {user.name.last}
        </Text>
        {/* Denne knap håndterer klik på email-adressen i rækken */}
        <Button title={user.email} onPress={this.sendEmail} />
      </TouchableOpacity>
    );
  }
}
