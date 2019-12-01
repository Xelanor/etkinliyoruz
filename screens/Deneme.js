import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  PermissionsAndroid,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

class Deneme extends Component {
  state = {};
  render() {
    return (
      <View style={styles.screen}>
        <Text>asd</Text>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 100,
    width: 100,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Deneme;
