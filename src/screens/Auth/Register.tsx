import {
  Heading,
  Box,
  Icon,
  VStack,
  FormControl,
  Input,
  Pressable,
  Text,
  Button,
} from 'native-base';
import React, {useState} from 'react';
import Antd from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {NAVIGATION} from '@/constants';
import Wrapper from '@/components/wrapper/Wrapper';

function Register() {
  const [passwordMode, setpasswordMode] = useState(true);
  const navigate = useNavigation<any>();
  return (
    <Wrapper>
      <Box px="10" py="10" backgroundColor={'primary.primary'}>
        <Heading fontFamily={'heading'} fontWeight={'900'} fontSize={'5xl'}>
          Sign In
        </Heading>
      </Box>
      <Box mt="10" flexDir={'row'} justifyContent={'center'}>
        <Icon mr="5" as={Antd} name="google" size="2xl" color="black" />
        <Icon mr="5" as={Antd} name="twitter" size="2xl" color="black" />
        <Icon
          mr="5"
          as={Antd}
          name="facebook-square"
          size="2xl"
          color="black"
        />
      </Box>
      <VStack px="10" mt="10">
        <FormControl>
          <FormControl.Label
            fontFamily={'heading'}
            _text={{
              bold: true,
              fontWeight: '800',
              color: 'black',
              fontFamily: 'heading',
            }}>
            Name
          </FormControl.Label>
          <Input
            type="text"
            placeholder="Name"
            borderColor={'black'}
            borderWidth={'2'}
            fontFamily={'heading'}
            rightElement={
              <Pressable px="2">
                <Icon as={MCI} name="account" color="black" size="md" />
              </Pressable>
            }
          />
          <FormControl.ErrorMessage
            _text={{
              fontSize: 'xs',
            }}>
            Error Name
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl>
          <FormControl.Label
            fontFamily={'heading'}
            _text={{
              bold: true,
              fontWeight: '800',
              color: 'black',
              fontFamily: 'heading',
            }}>
            Email
          </FormControl.Label>
          <Input
            type="text"
            placeholder="Email"
            borderColor={'black'}
            borderWidth={'2'}
            fontFamily={'heading'}
            rightElement={
              <Pressable px="2">
                <Icon as={Entypo} name="email" color="black" size="md" />
              </Pressable>
            }
          />
          <FormControl.ErrorMessage
            _text={{
              fontSize: 'xs',
            }}>
            Error Name
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl>
          <FormControl.Label
            fontFamily={'heading'}
            _text={{
              bold: true,
              fontWeight: '800',
              color: 'black',
              fontFamily: 'heading',
            }}>
            Password
          </FormControl.Label>
          <Input
            type={passwordMode ? 'password' : 'text'}
            placeholder="Password"
            borderColor={'black'}
            borderWidth={'2'}
            fontFamily={'heading'}
            rightElement={
              <Pressable px="2" onPress={() => setpasswordMode(!passwordMode)}>
                <Icon
                  as={Entypo}
                  name={passwordMode ? 'lock' : 'lock-open'}
                  color="black"
                  size="md"
                />
              </Pressable>
            }
          />
          <FormControl.ErrorMessage
            _text={{
              fontSize: 'xs',
            }}>
            Error Name
          </FormControl.ErrorMessage>
        </FormControl>
        <Pressable mt="1">
          <Text color="blue.500" fontWeight={'800'} fontSize="xs">
            Forgot Password?
          </Text>
        </Pressable>
      </VStack>
      <Box px="10" mt="5">
        <Button
          mt={'auto'}
          bgColor={'primary.primary'}
          borderColor={'black'}
          borderWidth={'2'}
          rounded={'lg'}>
          <Text fontFamily={'heading'} fontWeight={'700'}>
            Sign Up
          </Text>
        </Button>
        <Text mt="5" fontWeight="800" textAlign={'center'} fontSize={'lg'}>
          OR
        </Text>
        <Pressable
          alignSelf="center"
          mt="5"
          onPress={() => navigate.navigate(NAVIGATION.login, {})}>
          <Text
            textAlign={'center'}
            fontWeight="800"
            fontFamily="heading"
            fontSize="lg">
            Sign In
          </Text>
        </Pressable>
      </Box>
    </Wrapper>
  );
}

export default Register;
