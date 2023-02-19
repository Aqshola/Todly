import {extendTheme} from 'native-base';

const newColorTheme = {
  primary: {
    primary: '#FDEA6B',
    secondary: '#9FD8E5',
    success: '#78E185',
    error: '#FD6B6B',
    grey0: '#E7E6E6',
    orange: '#FFCF77',
    lighblue: '#9DDADB',
    darkblue: '#8FA7DF',
    pink: '#E279C7',
    darkpink: '#E86BBB',
    black: '#000000',
    'yellow-second': '#FFE850',
  },
};

const newFontTheme = {
  Nunito: {
    100: {
      normal: 'Nunito-Light',
      italic: 'Nunito-LightItalic',
    },
    200: {
      normal: 'Nunito-Light',
      italic: 'Nunito-LightItalic',
    },
    300: {
      normal: 'Nunito-Light',
      italic: 'Nunito-LightItalic',
    },
    400: {
      normal: 'Nunito-Regular',
      italic: 'Nunito-Italic',
    },
    500: {
      normal: 'Nunito-Medium',
      italic: 'Nunito-MediumItalic',
    },
    600: {
      normal: 'Nunito-Medium',
      italic: 'Nunito-MediumItalic',
    },
    700: {
      normal: 'Nunito-SemiBold',
      italic: 'Nunito-SemiBoldItalic',
    },
    800: {
      normal: 'Nunito-Bold',
      italic: 'Nunito-BoldItalic',
    },
    900: {
      normal: 'Nunito-Black',
      italic: 'Nunito-BlackItalic',
    },
  },
  OpenSans: {
    100: {
      normal: 'OpenSans-Light',
      italic: 'OpenSans-LightItalic',
    },
    200: {
      normal: 'OpenSans-Light',
      italic: 'OpenSans-LightItalic',
    },
    300: {
      normal: 'OpenSans-Light',
      italic: 'OpenSans-LightItalic',
    },
    400: {
      normal: 'OpenSans-Regular',
      italic: 'OpenSans-Italic',
    },
    500: {
      normal: 'OpenSans-Medium',
      italic: 'OpenSans-MediumItalic',
    },
    600: {
      normal: 'OpenSans-Medium',
      italic: 'OpenSans-MediumItalic',
    },
    700: {
      normal: 'OpenSans-SemiBold',
      italic: 'OpenSans-SemiBoldItalic',
    },
    800: {
      normal: 'OpenSans-Bold',
      italic: 'OpenSans-BoldItalic',
    },
    900: {
      normal: 'OpenSans-Black',
      italic: 'OpenSans-BlackItalic',
    },
  },
};

const theme = extendTheme({
  colors: newColorTheme,
  fontConfig: newFontTheme,
  fonts: {
    heading: 'Nunito',
    body: 'OpenSans',
    mono: 'Nunito',
  },
});

export default theme;
