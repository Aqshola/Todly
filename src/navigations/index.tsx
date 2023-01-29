import HomeNavigator from '@/navigations/HomeNavigator';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
}
