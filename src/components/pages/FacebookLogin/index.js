import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  Button,
  Image,
  TextInput,
  View
} from 'react-native';

const bgImage = require('../../../assets/images/fb_login_bg.jpg');


const FacebookLogin = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.facebookLoginContainer}>
      <Image source={ bgImage } style={styles.backgroundCover} resizeMode="cover"/>
      <View style={styles.loginContainerWrapper}>
        <View style={styles.loginContainer}>
          <Button
            onPress={() => navigate('Screen1')}
            title='navigate to Screen1' />
          <Button
            onPress={() => navigate('Screen2')}
            title='navigate to Screen2' />
          <Button
            onPress={() => navigate('Screen3')}
            title='navigate to Screen3' />
        </View>
      </View>
    </View>
  )
}

const navigationOptions = {
  header: null
}

const styles = StyleSheet.create({
  facebookLoginContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundCover: {
    flex: 1,
  },
  loginContainerWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0, .5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer: {
    width: 200,
    height: 300,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#999999',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8
  }
})

FacebookLogin.navigationOptions = navigationOptions

export default FacebookLogin
