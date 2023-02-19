import {Button, Text} from '@rneui/base';
import {useTheme, Icon, Input} from '@rneui/themed';
import {Theme} from '@rneui/base';
import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';

export default function Login() {
  const {theme} = useTheme();
  const generateStyle = style(theme);
  return (
    <SafeAreaView>
      <View style={generateStyle.wrapperTitleStyle}>
        <Text h1 h1Style={generateStyle.titleStyle}>
          Sign In
        </Text>
      </View>
      <View style={generateStyle.oAuthWrapper}>
        <Icon name="google--with-circle" type="entypo" size={38} />
        <Icon name="twitter" type="entypo" size={38} />
        <Icon name="facebook" type="entypo" size={38} />
      </View>
      <View style={generateStyle.formWrapper}>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Button
          title={'Sign In'}
          color={theme.colors.primary}
          titleStyle={{
            color: theme.colors.black,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const style = (theme: Theme) =>
  StyleSheet.create({
    wrapperTitleStyle: {
      paddingHorizontal: 35,
      paddingVertical: 40,
      backgroundColor: theme.colors.primary,
    },

    titleStyle: {
      fontFamily: 'Nunito-ExtraBold',
      fontWeight: '500',
      color: theme.colors.black,
      fontSize: 50,
    },

    oAuthWrapper: {
      marginTop: 15,
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',
      gap: 25,
    },

    formWrapper: {
      marginTop: 30,
      paddingHorizontal: 35,
    },
  });
