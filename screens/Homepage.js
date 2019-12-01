import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  PermissionsAndroid,
} from 'react-native';
import Materials from 'react-native-vector-icons/SimpleLineIcons';
import Geolocation from 'react-native-geolocation-service';

import EventBox from '../components/EventBox/EventBox';

class Homepage extends Component {
  state = {};

  componentDidMount() {
    this.requestLocationPermission();
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }

  requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Etkinliyoruz ile Lokasyonunu paylaşmak ister misin?',
          message:
            'Etkinliyoruz sana daha iyi hizmet verebilmek için  ' +
            'lokasyonuna ihtiyaç duymaktadır.',
          buttonNeutral: 'Daha Sonra Sor',
          buttonNegative: 'Hayır',
          buttonPositive: 'Evet',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  render() {
    return (
      <>
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={styles.screen}>
              <View style={styles.headerContainer}>
                <View style={styles.header}>
                  <Materials name="event" size={50} color="white" />
                  <View style={styles.col}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: '200',
                        fontSize: 16,
                        paddingBottom: 10,
                      }}>
                      Yakınlarda neler var?
                    </Text>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 40,
                        textDecorationLine: 'underline',
                      }}>
                      Maltepe
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 15,
                    paddingLeft: 30,
                    paddingTop: 50,
                  }}>
                  En Popüler Etkinlikler
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', paddingLeft: 10, paddingTop: 20}}>
                <EventBox />
              </View>
              <View
                style={{flexDirection: 'row', paddingLeft: 10, paddingTop: 20}}>
                <EventBox />
              </View>
              <View
                style={{flexDirection: 'row', paddingLeft: 10, paddingTop: 20}}>
                <EventBox />
              </View>
              <View
                style={{flexDirection: 'row', paddingLeft: 10, paddingTop: 20}}>
                <EventBox />
              </View>
              <View
                style={{flexDirection: 'row', paddingLeft: 10, paddingTop: 20}}>
                <EventBox />
              </View>
              <View
                style={{flexDirection: 'row', paddingLeft: 10, paddingTop: 20}}>
                <EventBox />
              </View>
              <View
                style={{flexDirection: 'row', paddingLeft: 10, paddingTop: 20}}>
                <EventBox />
              </View>
              <View
                style={{flexDirection: 'row', paddingLeft: 10, paddingTop: 20}}>
                <EventBox />
              </View>
              <View
                style={{flexDirection: 'row', paddingLeft: 10, paddingTop: 20}}>
                <EventBox />
              </View>
              <View
                style={{flexDirection: 'row', paddingLeft: 10, paddingTop: 20}}>
                <EventBox />
              </View>
              <View
                style={{flexDirection: 'row', paddingLeft: 10, paddingTop: 20}}>
                <EventBox />
              </View>
              <View
                style={{flexDirection: 'row', paddingLeft: 10, paddingTop: 20}}>
                <EventBox />
              </View>
              <View
                style={{flexDirection: 'row', paddingLeft: 10, paddingTop: 20}}>
                <EventBox />
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
    paddingBottom: 20,
  },
  headerContainer: {
    height: 220,
    backgroundColor: 'tomato',
    borderBottomEndRadius: 120,
    borderBottomLeftRadius: 30,
  },
  header: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 50,
    alignItems: 'center',
  },
  col: {
    flexDirection: 'column',
    paddingLeft: 20,
  },
});

export default Homepage;
