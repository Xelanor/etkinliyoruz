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
} from 'react-native';
import Materials from 'react-native-vector-icons/SimpleLineIcons';

import EventBox from '../components/EventBox/EventBox';

class Homepage extends Component {
  state = {};
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
