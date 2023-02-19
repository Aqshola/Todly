import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NAVIGATION} from '@/constants/index';
import {Login} from '@/screens';

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
  return <Stack.Screen name={NAVIGATION.login} component={Login} />;
}
