import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation'

import FacebookLogin from'../pages/FacebookLogin'
import Screen1 from '../pages/Screen1'
import Screen2 from '../pages/Screen2'
import Screen3 from '../pages/Screen3'


const AppNavigator = StackNavigator({
  FacebookLogin: { screen: FacebookLogin, },
  Screen1: { screen: Screen1 },
  Screen2: { screen: Screen2 },
  Screen3: { screen: Screen3 },
})

export default class App extends Component<{}, {}> {
  render () {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  }
});
