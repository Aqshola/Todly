/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ThemeProvider} from '@rneui/themed';
import RootNavigator from '@/navigations';
import theme from '@/theme/theme';

function App(): JSX.Element {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RootNavigator />
      </ThemeProvider>
    </>
  );
}

export default App;
