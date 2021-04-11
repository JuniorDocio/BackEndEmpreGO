import { StyleSheet } from 'react-native';
import { globalColors } from '../../globalStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalColors.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center'
  },

  titleView: {
    borderColor: '#F00',
    borderStyle: 'solid',
    borderWidth: 1,
  },

  title: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 30
  },

  fieldsView: {
    borderColor: '#F00',
    borderStyle: 'solid',
    borderWidth: 1,
  },

  btnView: {
    borderColor: '#F00',
    borderStyle: 'solid',
    borderWidth: 1,
  }
})