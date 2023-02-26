import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NAVIGATION} from '@/constants/index';
import {Home, Landing, Login} from '@/screens';

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
  return (
    <>
      <Stack.Screen name={NAVIGATION.landing} component={Landing} />
      <Stack.Screen name={NAVIGATION.login} component={Login} />
      {/* <Stack.Screen name={NAVIGATION.home} component={Home} /> */}
    </>
  );
}
