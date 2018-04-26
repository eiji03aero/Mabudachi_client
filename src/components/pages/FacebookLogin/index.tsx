import React from 'react';
import {
  Button,
  Image,
  View
} from 'react-native';
import styles from './style';

const bgImage = require('../../../assets/images/fb_login_bg.jpg');

interface ReactProps {
  navigation: any;
  navigationOptions: any;
}

interface Props extends React.SFC<ReactProps> {
  navigationOptions?: any;
}

const FacebookLogin: Props = ({ navigation: { navigate } }) => {
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
  header: null,
};

FacebookLogin.navigationOptions = navigationOptions

export default FacebookLogin
