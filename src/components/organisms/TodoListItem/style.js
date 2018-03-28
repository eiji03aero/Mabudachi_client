import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors.js';

const styles = StyleSheet.create({
  listItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderBottomColor: colors.black_light05,
    borderBottomWidth: 1,
  },
  listItemCheckBoxContainer: {
    width: 20,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  listItemContent: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
  listItemDescriptionBox: {
    display: 'none',
    backgroundColor: colors.grey
  },
  editButton: {
    width: 50,
    padding: 5,
    backgroundColor: '#40cc90'
  },
  deleteButton: {
    width: 50,
    padding: 5,
    backgroundColor: '#cc0000'
  },
  listItemContainer_Completed: {
    backgroundColor: colors.grey,
  },
  listItemTitle_Completed: {
    textDecorationLine: 'line-through'
  }
});

export default styles;
