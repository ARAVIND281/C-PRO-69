import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import BookTransactionScreen from './screens/bookTransactionScreen';
import SearchScreen from './screens/searchScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';


export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
const TabNavigator = createBottomTabNavigator({
  Transaction: { screen: BookTransactionScreen },
  Search: { screen: SearchScreen },
});
const AppContainer = createAppContainer(TabNavigator);