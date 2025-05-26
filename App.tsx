import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Navigator from './src/AppNavigation';


const Stack = createNativeStackNavigator();
export default function App(): React.JSX.Element {
  
  return (
    <Navigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

