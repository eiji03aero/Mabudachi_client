import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors.js';

const styles = StyleSheet.create({
  todoPageContainer: {
    flex: 1
  },
  todoPageHeaderContainer: {
    padding: 20,
    backgroundColor: colors.white,
    borderBottomColor: colors.black_light05,
    borderBottomWidth: 1,
  },
  todoPageMainContainer: {
    flex: 1,
    backgroundColor: colors.grey
  }
});

export default styles;
