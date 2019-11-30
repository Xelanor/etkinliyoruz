import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

const Header = props => {
  return (
    <View style={styles.header}>
      <StatusBar barStyle="light-content" />
      <Image
        style={{
          height: 50,
          resizeMode: 'center',
        }}
        source={require('../../assets/logo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
});

export default Header;
