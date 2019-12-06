import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  PermissionsAndroid,
  Picker,
} from 'react-native';

import SearchTextBox from '../components/SearchBoxes/SearchTextBox';

class Deneme extends Component {
  state = {};
  render() {
    return (
      <>
        <ScrollView style={{flex: 1, backgroundColor: 'black'}}>
          <View style={styles.container}>
            <SearchTextBox />
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default Deneme;
