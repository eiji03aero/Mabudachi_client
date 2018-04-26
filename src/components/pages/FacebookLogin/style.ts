import { StyleSheet } from 'react-native';

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

export default styles;
