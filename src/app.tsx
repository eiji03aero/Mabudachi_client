import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import FacebookLogin from './components/pages/FacebookLogin';
import { Screen1Container } from './components/pages/Screen1';
import Screen2 from './components/pages/Screen2';
import Screen3 from './components/pages/Screen3';
import { ColorPicker } from './components/pages/ColorPicker';
import store from './store';

const AppNavigator = StackNavigator({
  FacebookLogin: { screen: FacebookLogin },
  Screen1: { screen: Screen1Container },
  Screen2: { screen: Screen2 },
  Screen3: { screen: Screen3 },
  ColorPicker: { screen: ColorPicker },
});

interface Props { }

class App extends Component<Props, {}> {
  public render () {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
});

export default App;
