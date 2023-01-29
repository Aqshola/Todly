import React from 'react';
import {SafeAreaView, View, StyleSheet, StatusBar} from 'react-native';
import {useTheme, Text, Image, Button} from '@rneui/themed';
import {Theme} from '@rneui/base';

export default function Landing() {
  const {theme} = useTheme();
  const generateStyle = style(theme);

  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.primary}
        showHideTransition={'fade'}
        animated={true}
        translucent={true}
      />
      <SafeAreaView style={generateStyle.wrapper}>
        <View style={generateStyle.parent}>
          {/* HEADING */}
          <View>
            <Text h1 h1Style={generateStyle.h1Style}>
              Todly
            </Text>
            <Text style={generateStyle.pStyle}>
              Manage and organize your daily task
            </Text>
          </View>

          {/* IMAGE */}

          <Image
            style={generateStyle.image}
            source={require('@/assets/images/landing.png')}
            containerStyle={generateStyle.imageConteiner}
          />

          {/* BUTTON */}
          <Button
            titleStyle={generateStyle.titleOutlineButton}
            title={'Lets do it'}
            type="solid"
            buttonStyle={generateStyle.outlineButton}
            radius={5}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const style = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: theme.colors.primary,
      flex: 1,
    },
    parent: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 30,
      alignContent: 'center',
    },
    outlineButton: {
      marginTop: 30,
      backgroundColor: theme.colors.white,
      color: theme.colors.black,
      borderColor: theme.colors.black,
      borderWidth: 2,
    },
    titleOutlineButton: {
      fontFamily: 'Nunito-Medium',
      fontWeight: '500',
      color: theme.colors.black,
    },
    imageConteiner: {},
    image: {
      marginLeft: 20,
      aspectRatio: 0.9,
      resizeMode: 'cover',
    },
    h1Style: {
      fontFamily: 'Nunito-ExtraBold',
      fontWeight: '300',
      fontSize: 54,
    },
    pStyle: {
      letterSpacing: 1,
      width: '80%',
      fontFamily: 'Nunito-Medium',
      fontWeight: '400',
      fontSize: 18,
    },
  });
