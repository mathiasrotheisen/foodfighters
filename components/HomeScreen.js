import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import Constants from 'expo-constants';
import UserItem from './UserItem';

const USERS_URL = 'https://randomuser.me/api?results=10';

export default class HomeScreen extends React.Component {
  state = {
    users: null,
    isLoading: false,
    error: null,
  };

  componentDidMount = () => {
    this.loadUserProfiles();
  };

  startLoading = () => this.setState({ isLoading: true });

  stopLoading = () => this.setState({ isLoading: false });

  setError = message => this.setState({ error: message });

  clearError = () => this.setState({ error: null });

  loadUserProfiles = async () => {
    try {
      this.startLoading();
      const response = await fetch(USERS_URL);
      const json = await response.json();
      console.log('json response from network', json);
      this.setState({ users: json.results });
      this.stopLoading();
      this.clearError();
    } catch (error) {
      this.stopLoading();
      this.setError(error.message);
    }
  };

  render() {
    const { isLoading, users, error } = this.state;
    const firstUser = users ? users[0] : null;
    return (
      <View style={styles.container}>
        {/* Hvis state.isLoading er true, viser vi en spinner */}
        {isLoading && <ActivityIndicator />}
        {/* Hvis state.users er sat, viser vi listen af users */}
        {users && (
          <FlatList
            data={users}
            // Vi sender vores item, som er den enkelte user, med som prop til UserItem
            // Vi sender også vores event handler med som prop, så UserItem ikke skal håndtere navigation
            // this.handleSelectUser modtager en user som argument
            renderItem={({ item }) => (
              <UserItem user={item} onSelect={this.handleSelectUser} />
            )}
            keyExtractor={item => item.login.uuid}
          />
        )}
        {/* Hvis der er fejl, dvs. state.error er sat, viser vi fejlen */}
        {error && <Text style={styles.error}>Error: {error}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  error: {
    color: 'red',
  },
});

