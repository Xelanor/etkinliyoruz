import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchTextBox = props => {
  return (
    <View style={styles.searchSection}>
      <Ionicons
        style={styles.searchIcon}
        name={'ios-search'}
        size={18}
        color={'gray'}
      />
      <TextInput
        style={styles.input}
        placeholder="Etkinlik arayın..."
        onChangeText={searchString => {
          this.setState({searchString});
        }}
        underlineColorAndroid="transparent"
      />
      <View style={styles.searchButton}>
        <Text style={styles.searchText}>Ara</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    width: '90%',
  },
  searchIcon: {
    padding: 7,
  },
  input: {
    flex: 1,
    paddingTop: 7,
    paddingRight: 7,
    paddingBottom: 7,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
  searchButton: {
    padding: 7,
    width: 70,
    height: '100%',
    backgroundColor: 'rgba(254, 234, 180, 0.46)',
    borderTopEndRadius: 15,
    borderBottomEndRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchText: {
    fontSize: 16,
  },
});

export default SearchTextBox;
