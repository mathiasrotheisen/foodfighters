import * as React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';

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
            coordinate={{ latitude: 55.707190, longitude: 12.581250 }}
            title="2. kg gulerødder"
            description="2100, København Ø"
          />
          <Marker
            coordinate={{ latitude: 55.706190, longitude: 12.582550 }}
            title="Pakke smør"
            description="2100, København Ø"
          />
          <Marker
            coordinate={{ latitude: 55.707690, longitude: 12.570960 }}
            title="Et halvt rugbrød fra bageren"
            description="2100, København Ø"
          />
          <Marker
            coordinate={{ latitude: 55.709770, longitude: 12.551870 }}
            title="Yoghurt"
            description="2100, København Ø"
          />
          <Marker
            coordinate={{ latitude: 55.698816, longitude: 12.546033 }}
            title="En pakke leverpostej"
            description="2200, København N"
          />
          <Marker
            coordinate={{ latitude: 55.693108, longitude: 12.555985 }}
            title="Vindruer"
            description="2200, København N"
          />
          <Marker
            coordinate={{ latitude: 55.676411, longitude: 12.551610 }}
            title="Stykke entrecote"
            description="2000, Frederiksberg"
          />
          <Marker
            coordinate={{ latitude: 55.673202, longitude: 12.500143 }}
            title="Halv pose boller fra Kohberg"
            description="2000, Frederiksberg"
          />
          <Marker
            coordinate={{ latitude: 55.668988, longitude: 12.549893 }}
            title="Ketchup"
            description="1500, København V"
          />
          <Marker
            coordinate={{ latitude: 55.665599, longitude: 12.553925 }}
            title="6-pakke æg"
            description="1500, København V"
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
  },
  map: {
    flex: 1,
  },
});
