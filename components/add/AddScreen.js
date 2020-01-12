import * as React from 'react';
import { Text, View, StyleSheet, Linking, Platform, IntentLauncherAndroid, Button, Image, CameraRoll, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';

function openSettings() {
  if (Platform.OS == 'ios') {
    Linking.openURL('app-settings:');
  } else {
    IntentLauncherAndroid.startActivityAsync(
      IntentLauncherAndroid.ACTION_LOCATION_SOURCE_SETTINGS
    );
  }
}

export default class MoreScreen extends React.Component {
    // Used when taking a photo
    cameraRef = React.createRef();

    state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
    };
  
    // Vi kontrollerer permissions når komponennten starter
    componentDidMount() {
      this.updateCameraPermission();
      this.updateCameraRollPermission();
    }
  
    // Spørg om permission og sæt state til svaret som kommer retur
    updateCameraPermission = async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      this.setState({ hasCameraPermission: status === 'granted' });
    };
  
    updateCameraRollPermission = async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      this.setState({ hasCameraRollPermission: status === 'granted' });
    };
  
    // Skift kamera-state
    useBackCamera = () => this.setState({ type: Camera.Constants.Type.back });
    useFrontCamera = () => this.setState({ type: Camera.Constants.Type.front });
  
    //Tag et billede og send den gemte sti videre
    handleTakePhoto = async () => {
      if (!this.cameraRef.current) {
        return;
      }
      // Vi navigerer til AddScreenTwo skærmen
      this.props.navigation.navigate('AddScreenTwo');

      const result = await this.cameraRef.current.takePictureAsync();
      console.log({ result });
      this.setState({ lastPhoto: result.uri });
      await this.handleSaveToCameraRoll(result.uri);
    };
  
    // Gem billedet i galleriet
    handleSaveToCameraRoll = async uri => {
      console.log(1);
      try {
        const result = await CameraRoll.saveToCameraRoll(uri, 'photo');
      } catch (error) {
        console.error(error);
      }
    };

    render() {
      const { hasCameraPermission, type } = this.state;
      // Vi ingenting så længe vi venter på input fra bruger
      if (hasCameraPermission === null) {
        return <View />;
      }
      // Viser en fejlbesked og en knap til settings hvis brugeren ikke har accepteret adgang
      if (hasCameraPermission === false) {
        return (
          <View>
            <Text>No access to camera.</Text>
            <Button title="Indstillinger" onPress={openSettings} />
          </View>
        );
      }

      // Viser kamera preview og knapper. Vis en "Front" eller "Back" knap afhængig af state
      return (
          <Camera style={styles.camara} type={type} ref={this.cameraRef}>
            {type === Camera.Constants.Type.back && (
              <Button title="Frontkamara" onPress={this.useFrontCamera} />
            )}
            {type === Camera.Constants.Type.front && (
              <Button title="Bagkamara" onPress={this.useBackCamera} />
            )}
            <View style={styles.takePhoto}>
              <TouchableOpacity onPress={this.handleTakePhoto}>
                <Image source={require('../../assets/takePhoto.png')}/>
              </TouchableOpacity>
            </View>
          </Camera>
      );
    }
  }

  const styles = StyleSheet.create({
    camara: {
      height: '100%',
      width: '100%',
    },
    takePhoto: {
      paddingTop: 450,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });