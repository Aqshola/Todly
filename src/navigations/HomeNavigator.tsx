import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NAVIGATION} from '@/constants/index';
import {Home} from '@/screens';
import Landing from '@/screens/Landing/Landing';

const Stack = createNativeStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={NAVIGATION.landing} component={Landing} />
      <Stack.Screen name={NAVIGATION.home} component={Home} />
    </Stack.Navigator>
  );
}
