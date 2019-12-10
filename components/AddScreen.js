import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Linking, Platform, IntentLauncherAndroid, Button, Image, CameraRoll } from 'react-native';
import Constants from 'expo-constants';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';

function openSettings() {
  if (Platform.OS == 'ios') {
    Linking.openURL('app-setteing:');
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
      //hasCameraRollPermission: null,
      type: Camera.Constants.Type.back,
      //lastPhoto: null,
      //galleryImages: null,
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
      // Vis en fejlbesked og en knap til settings hvis brugeren ikke har accepteret adgang
      if (hasCameraPermission === false) {
        return (
          <View>
            <Text>No access to camera.</Text>
            <Button title="Go to settings" onPress={openSettings} />
          </View>
        );
      }

      // Vis kamera preview og knapper. Vis en "Front" eller "Back" knap afhængig af state
      return (
        <View>
          <Camera style={styles.container} type={type} ref={this.cameraRef}>
            {type === Camera.Constants.Type.back && (
              <Button title="Front camera" onPress={this.useFrontCamera} />
            )}
            {type === Camera.Constants.Type.front && (
              <Button title="Back camera" onPress={this.useBackCamera} />
            )}
            <Button style={styles.takePhoto} title="Take photo" onPress={this.handleTakePhoto} />
          </Camera>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      //aspectRatio: 0.50,
      height: '100%',
      width: '100%',
    },
  });