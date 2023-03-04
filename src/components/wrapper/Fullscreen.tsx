import React from 'react';
import {SafeAreaView} from 'react-native';

interface Props {
  children: React.ReactNode;
}
function Fullscreen({...props}: Props) {
  return (
    <>
      <SafeAreaView>{props.children}</SafeAreaView>
    </>
  );
}

export default Fullscreen;
