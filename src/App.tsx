/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import RootNavigator from '@/navigations';
import {NativeBaseProvider} from 'native-base';
import theme from '@/theme/theme';

function App(): JSX.Element {
  return (
    <>
      <NativeBaseProvider theme={theme}>
        <RootNavigator />
      </NativeBaseProvider>
    </>
  );
}

export default App;
