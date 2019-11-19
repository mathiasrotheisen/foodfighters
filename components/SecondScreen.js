import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Button } from 'react-native';

// Map imports
import Constants from 'expo-constants';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class SecondScreen extends React.Component {
  state = {
    // Har brugeren acceperet lokation?
    hasLocationPermission: null,
    // Nuværende lokation
    currentLocation: null,
    // De markører som brugeren har sat
    userMarkerCoordinates: [],
    // Koordinatet på valgte markør
    selectedCoordinate: null,
    // Adressen på valgte markør
    selectedAddress: null,
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

  // Event handler når der laves et long press.
  handleLongPress = event => {
    const { coordinate } = event.nativeEvent;
    // Vi modificerer et array som ligger i state, derfor bruger vi en "sikker" metode så vi kender den forrige version af staten
    this.setState(prevState => {
      return {
        // Her laver vi et nyt array, hvor vi pakker det gamle ud, og tilføjer det sidste koordinat i enden
        userMarkerCoordinates: [...prevState.userMarkerCoordinates, coordinate],
      };
    });
  };

  // Vi sætter staten med den valgte markør - og beder om at få adressen
  handleSelectMarker = coordinate => {
    this.setState({ selectedCoordinate: coordinate });
    this.findAddress(coordinate);
  };

  // Vi finder en adresse, og sætter denne i state
  findAddress = async coordinate => {
    const [selectedAddress] = await Location.reverseGeocodeAsync(coordinate);
    this.setState({ selectedAddress });
  };

  // Vi tømmer adresse og koordinat, og dermed har infoboksen ingen data
  closeInfoBox = () =>
    this.setState({ selectedCoordinate: null, selectedAddress: null });

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
    // Vi viser den modtagne lokation
    return (
      <View>
        <Button title="update location" onPress={this.updateLocation} />
        {currentLocation && (
          <Text>
            {`${currentLocation.latitude}, ${
              currentLocation.longitude
            } accuracy:${currentLocation.accuracy}`}
          </Text>
        )}
      </View>
    );
  };

  render() {
    const {
      userMarkerCoordinates,
      selectedCoordinate,
      selectedAddress,
    } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        {this.renderCurrentLocation()}
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          showsUserLocation
          onLongPress={this.handleLongPress}>
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
          {/* Her løber vi alle koordinater på markørerne fra state, igennem og tilføjer Marker elementer på kortet */}
          {userMarkerCoordinates.map((coordinate, index) => (
            <Marker
              coordinate={coordinate}
              // Vi bruger index som key
              key={index.toString()}
              // Vi opretter en funktion, som kalder vores handleSelectMarker med koordinatet markøren
              onPress={() => this.handleSelectMarker(coordinate)}
            />
          ))}
        </MapView>
        {/* Vi viser kun infoboksen hvis der er valgt en markør */}

        {selectedCoordinate && (
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              {selectedCoordinate.latitude}, {selectedCoordinate.longitude}
            </Text>
            {/* Vi viser kun adressen hvis der kommet data retur fra reverse geocode, og selectedAddress er sat i state*/}
            {selectedAddress && (
              <Text style={styles.infoText}>
                {selectedAddress.name} {selectedAddress.postalCode}
              </Text>
            )}
            <Button title="close" onPress={this.closeInfoBox} />
          </View>
        )}
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
    padding: 8,
  },
  map: { flex: 1 },
  infoBox: {
    height: 100,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  infoText: {
    fontSize: 20,
  },
});
