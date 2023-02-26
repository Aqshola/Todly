import {Box, Heading, Icon} from 'native-base';
import React from 'react';
import {SafeAreaView} from 'react-native';
import Antd from 'react-native-vector-icons/AntDesign';

export default function Login() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <Box backgroundColor={'primary.primary'} px="32" py="72">
        <Heading fontFamily={'heading'} fontWeight={'900'} fontSize={'5xl'}>
          Sign In
        </Heading>
      </Box>
      <Box mt="56" flexDir={'row'} justifyContent={'center'}>
        <Icon as={Antd} name="google" size="lg" color="black"/>
        <Icon as={Antd} name="twitter" size="lg" color="black" />
        <Icon as={Antd} name="facebook-square" size="lg" color="black" />
      </Box>
    </SafeAreaView>
  );
}
