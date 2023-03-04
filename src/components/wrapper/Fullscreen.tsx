import React from 'react';
import {SafeAreaView} from 'react-native';

interface Props {
  children: React.ReactNode;
}
function Fullscreen({...props}: Props) {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        {props.children}
      </SafeAreaView>
    </>
  );
}

export default Fullscreen;
