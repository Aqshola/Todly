import {Heading, Box, Text, Image, Button} from 'native-base';
import React from 'react';
import Illustration from '@/assets/images/landing.png';
import {useNavigation} from '@react-navigation/native';
import {NAVIGATION} from '@/constants';
import Wrapper from '@/components/wrapper/Wrapper';

export default function Landing() {
  const navigate = useNavigation<any>();
  return (
    <Wrapper>
      <Box flex={1} px="5" pb="5" backgroundColor={'primary.primary'}>
        <Heading
          fontFamily={'heading'}
          fontWeight={'900'}
          mt={'10'}
          fontSize={'5xl'}>
          Todly
        </Heading>
        <Text fontFamily={'body'} fontSize={'lg'} width={'56'}>
          Manage and organized your daily task
        </Text>

        <Box width="100%" height={400} mt="10">
          <Image
            alignSelf={'center'}
            source={Illustration}
            alt="someone with phone"
            resizeMode="cover"
            flex={1}
          />
        </Box>
        <Button
          onPress={() => navigate.navigate(NAVIGATION.login)}
          mt={'auto'}
          bgColor={'white'}
          borderColor={'black'}
          borderWidth={'2'}
          rounded={'lg'}>
          <Text fontFamily={'heading'} fontSize={'lg'} fontWeight={'700'}>
            Let's do it
          </Text>
        </Button>
      </Box>
    </Wrapper>
  );
}
