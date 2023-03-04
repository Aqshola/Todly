import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NAVIGATION} from '@/constants/index';
import {Home, Landing, Login, Register} from '@/screens';
import React from 'react';

export default function RootNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName={NAVIGATION.login}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={NAVIGATION.landing} component={Landing} />
        <Stack.Screen name={NAVIGATION.login} component={Login} />
        <Stack.Screen name={NAVIGATION.register} component={Register} />

        <Stack.Screen name={NAVIGATION.home} component={Home} />
        {/* AUTH */}
        {/* <Stack.Screen name={NAVIGATION.login} component={Login} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
