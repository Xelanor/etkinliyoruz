import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';
import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Homepage from './screens/Homepage';
import Deneme from './screens/Deneme';

class SettingsScreen extends Component {
  state = {};
  render() {
    return (
      <>
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic"></ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({});

const getTabBarIcon = (navigation, focused, tintColor) => {
  const {routeName} = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Home') {
    iconName = `ios-home`;
  } else if (routeName === 'Search') {
    iconName = `ios-search`;
  } else if (routeName === 'Favorites') {
    iconName = `ios-${focused ? 'heart' : 'heart-empty'}`;
  } else if (routeName === 'Settings') {
    iconName = `ios-settings`;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: {screen: Homepage},
      Search: {screen: Deneme},
      Favorites: {screen: SettingsScreen},
      Settings: {screen: SettingsScreen},
    },
    {
      initialRouteName: 'Search',
      defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, tintColor}) =>
          getTabBarIcon(navigation, focused, tintColor),
      }),
      tabBarOptions: {
        showLabel: false,
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    },
  ),
);
