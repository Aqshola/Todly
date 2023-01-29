import {createTheme} from '@rneui/themed';
import '@rneui/themed';

declare module '@rneui/themed' {
  export interface Colors {
    'yellow-second': string;
    orange: string;
    lighblue: string;
    darkblue: string;
    pink: string;
    darkpink: string;
    lightred: string;
  }
}

export default createTheme({
  lightColors: {
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
  mode: 'light',
});
