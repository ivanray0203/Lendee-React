import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './components/Home';
import Create from './components/Create';
import Update from './components/Update';

import {createStackNavigator} from 'react-navigation';

const RootStack = createStackNavigator({
  Home: Home,
  Create: Create,
  Update: Update,
});

export default function App() {
  return <RootStack/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
