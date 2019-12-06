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
  Image,
  Picker,
} from 'react-native';
import Materials from 'react-native-vector-icons/SimpleLineIcons';
import Geolocation from 'react-native-geolocation-service';

import SearchTextBox from '../components/SearchBoxes/SearchTextBox';
import CategoryBox from '../components/CategoryBox/CategoryBox';
import Button from '../components/Button/Button';
import EventBox from '../components/EventBox/EventBox';

import {districts} from '../constants/constants';

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
              <View style={styles.image}>
                <Image
                  style={{
                    flex: 1,
                    resizeMode: 'stretch',
                    width: '100%',
                  }}
                  source={require('../assets/homepage-bg.png')}
                />
              </View>
              <View style={styles.searchBar}>
                <SearchTextBox />
              </View>
              <View style={styles.categoryBar}>
                <Picker
                  selectedValue={'-'}
                  style={{
                    height: 40,
                    width: '90%',
                    backgroundColor: 'white',
                    paddingLeft: 20,
                  }}
                  itemStyle={{width: 300}}
                  mode="dropdown">
                  {districts.map(district => {
                    return (
                      <Picker.Item
                        key={district}
                        label={district}
                        value={district}
                      />
                    );
                  })}
                </Picker>
              </View>
              <View style={styles.categoryBar}>
                <SearchTextBox />
              </View>
              <View style={{padding: 15, flexDirection: 'row'}}>
                <CategoryBox logo={'education'} />
                <CategoryBox logo={'movie'} />
                <CategoryBox logo={'avm'} />
                <CategoryBox logo={'concert'} />
              </View>
              <View style={styles.buttonBar}>
                <Button />
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
    backgroundColor: '#DDDDDD',
  },
  image: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -80,
  },
  categoryBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
  },
  buttonBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  col: {
    flexDirection: 'column',
    paddingLeft: 20,
  },
});

export default Homepage;
