import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const CategoryBox = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.col}>
        <Image
          style={{
            resizeMode: 'cover',
          }}
          source={require('../../assets/education-logo.png')}
        />
      </View>
      <Text style={styles.title}>{'Atölye & Eğitim'}</Text>
      <Text style={styles.description}>{'17 Etkinlik'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: 85,
    height: 85,
    backgroundColor: 'white',
    borderRightWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
  title: {fontSize: 10, fontWeight: 'bold', paddingTop: 5},
  description: {fontSize: 8, color: '#9E9E9E'},
});

export default CategoryBox;
