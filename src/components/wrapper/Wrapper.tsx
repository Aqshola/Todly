import {StatusBar} from 'native-base';
import React from 'react';
import Fullscreen from './Fullscreen';

interface Props {
  children: React.ReactNode;
}
function Wrapper({...props}: Props) {
  return (
    <>
      <StatusBar
        backgroundColor={'#FDEA6B'}
        barStyle={'dark-content'}
        animated={true}
      />
      <Fullscreen>{props.children}</Fullscreen>
    </>
  );
}

export default Wrapper;
