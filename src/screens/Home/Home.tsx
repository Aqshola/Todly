import {Text} from '@rneui/base';
import React from 'react';
import {SafeAreaView, View} from 'react-native';

type Props = {};

export default function Home({}: Props) {
  return (
    <SafeAreaView>
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
}
