import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Button } from 'react-native';

// Map imports
import Constants from 'expo-constants';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class MapScreen extends React.Component {
  state = {
    // Har brugeren acceperet lokation?
    hasLocationPermission: null,
    // Nuværende lokation
    currentLocation: null,
    /* // De markører som brugeren har sat
    userMarkerCoordinates: [],
    // Koordinatet på valgte markør
    selectedCoordinate: null,
    // Adressen på valgte markør
    selectedAddress: null, */
  };

  getLocationPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    this.setState({ hasLocationPermission: status });
  };

  componentDidMount = async () => {
    await this.getLocationPermission();
  };

  updateLocation = async () => {
    const { coords } = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Balanced,
    });
    this.setState({ currentLocation: coords });
  };

  renderCurrentLocation = () => {
    const { hasLocationPermission, currentLocation } = this.state;
    // Brugeren har ikke taget stilling. vi viser ingen ting
    if (hasLocationPermission === null) {
      return null;
    }
    // Brugeren har sagt nej, vi viser en fejl
    if (hasLocationPermission === false) {
      return <Text>No location access. Go to settings to change</Text>;
    }
  };

  render() {
    /* const {
      userMarkerCoordinates,
      selectedCoordinate,
      selectedAddress,
    } = this.state; */
    return (
      <SafeAreaView style={styles.container}>
        {this.renderCurrentLocation()}
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          showsUserLocation
          region={{
            latitude: 55.684082,
            longitude: 12.528108,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          >
          {/* Vi indsætter nogle hardkodede markører på kortet*/}
          <Marker
            coordinate={{ latitude: 55.676195, longitude: 12.569419 }}
            title="Rådhuspladsen"
            description="blablabal"
          />
          <Marker
            coordinate={{ latitude: 55.673035, longitude: 12.568756 }}
            title="Tivoli"
            description="blablabal"
          />
          <Marker
            coordinate={{ latitude: 55.674082, longitude: 12.598108 }}
            title="Christiania"
            description="blablabal"
          />
        </MapView>        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  map: { flex: 1 },
});
