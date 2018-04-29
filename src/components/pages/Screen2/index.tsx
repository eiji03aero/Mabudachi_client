import React, { Component } from 'react';
import {
  Text,
  TextInput,
  Button,
  View,
} from 'react-native';

import OpenWeatherMap from './open_weather_map.js'
import styles from './style';

interface Props { }

interface State {
  zip: string;
  main: string;
  description: string;
  temp: string;
  isFetching: boolean;
}

class Screen2 extends Component<Props,State> {
  constructor (props: any) {
    super(props)
    this.state = {
      zip: '',
      main: '',
      description: '',
      temp: '',
      isFetching: false,
    }
    this.handlePress = this.handlePress.bind(this)
  }

  handlePress () {
    this.setState({ isFetching: true })
    const { zip } = this.state
    OpenWeatherMap.fetchForecast(zip)
      .then(res => res.json())
      .then(resJson => {
        if (resJson.cod === '404') {
          return this.setState({ main: resJson.message, isFetching: false })
        }
        const main = resJson.weather[0].main
        const description = resJson.weather[0].description
        const temp = resJson.main.temp
        this.setState({ isFetching: false })
        this.setState({ main, description, temp })
      })
      .catch(err => {
        this.setState({ isFetching: false })
        this.setState({ main: JSON.stringify(err) })
        console.error(err)
      })
  }

  render () {
    const { main, description, temp, isFetching } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Screen2</Text>
          <TextInput
            style={styles.input}
            placeholder='put your zip here'
            onChangeText={text => this.setState({ zip: text })} />
          <Button
            title='fetch weather'
            onPress={ () => this.handlePress() } />
        </View>
        <View style={styles.body}>
          <Text style={styles.weatherMsg}>Main: { main }</Text>
          <Text style={styles.weatherMsg}>Description: {description}</Text>
          <Text style={styles.weatherMsg}>temp: {temp}</Text>

          {
            isFetching
              ? <Text style={styles.bigText}>is loading now ma....</Text>
              : null
          }
        </View>
      </View>
    )
  }
}

export default Screen2
