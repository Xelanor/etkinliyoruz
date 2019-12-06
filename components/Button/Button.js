import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const Button = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.content}>Tüm Etkinlikler</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 220,
    height: 40,
    backgroundColor: '#E86C60',
    borderRightWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 20,
  },
  content: {fontSize: 18, color: 'white', fontWeight: 'bold'},
});

export default Button;
