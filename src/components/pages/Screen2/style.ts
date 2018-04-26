import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555555'
  },
  header: {
    backgroundColor: '#eeeeee',
    paddingLeft: 10,
    paddingRight: 10,
  },
  body: {
    flex: 1,
  },
  input: {
    borderColor: '#333333',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  weatherMsg: {
    color: '#ffffff',
    fontSize: 24,
  },
  bigText: {
    color: '#ffffff',
    fontSize: 36
  }
})

export default styles;
