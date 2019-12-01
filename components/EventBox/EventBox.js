import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = props => {
  return (
    <View style={styles.screen}>
      <Image
        style={{resizeMode: 'cover', width: 100, height: 95, borderRadius: 20}}
        source={require('../../assets/events/yasayan-sayfalar.jpg')}
      />
      <View style={styles.col}>
        <Text style={styles.title}>Yaşayan Sayfalar</Text>
        <Text style={styles.date}>22 ARALIK 2019 PAZAR 12:00</Text>
        <Text style={styles.location}>İBB Reşat Nuri Tiyatrosu</Text>
        <View style={styles.heart}>
          <Ionicons name={'ios-heart-empty'} size={20} color={'gray'} />
        </View>
      </View>
    </View>
  );
};

const screenWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  screen: {flexDirection: 'row', flex: 1, width: screenWidth},
  col: {
    flexDirection: 'column',
    width: screenWidth - 130,
  },
  title: {fontSize: 20, fontWeight: 'bold', paddingLeft: 10},
  date: {
    fontSize: 12,
    fontWeight: 'normal',
    paddingLeft: 10,
    paddingTop: 5,
    color: '#718096',
  },
  location: {
    fontSize: 12,
    fontWeight: 'normal',
    paddingLeft: 10,
    paddingTop: 10,
    color: '#718096',
  },
  heart: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
});

export default Header;
