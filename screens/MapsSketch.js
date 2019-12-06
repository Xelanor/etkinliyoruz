import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  PermissionsAndroid,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

class Deneme extends Component {
  state = {x: {latitude: 40.953296, longitude: 29.100807}};
  render() {
    let markers = [
      {
        latlng: {latitude: 40.953296, longitude: 29.100807},
        title: 'A',
        description: 'Tiyatro',
      },
      {
        latlng: {latitude: 40.941948, longitude: 29.113986},
        title: 'B',
        description: 'AVM',
      },
      {
        latlng: {latitude: 40.927254, longitude: 29.128374},
        title: 'C',
        description: 'Sinema',
      },
    ];
    return (
      <>
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={styles.screen}>
              <Text>asd</Text>
              <View style={styles.container}>
                <MapView
                  style={styles.map}
                  initialRegion={{
                    latitude: 40.940084,
                    longitude: 29.122472,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                  }}>
                  <Marker
                    draggable
                    coordinate={this.state.x}
                    onDragEnd={e =>
                      this.setState({x: e.nativeEvent.coordinate})
                    }
                  />
                </MapView>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'blue',
  },
  container: {
    height: 300,
    backgroundColor: 'red',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Deneme;
