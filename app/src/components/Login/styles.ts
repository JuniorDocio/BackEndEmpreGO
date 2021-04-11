import { StyleSheet } from 'react-native';

import { globalColors } from '../../globalStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalColors.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageView: {
    borderColor: '#F00',
    borderStyle: 'solid',
    borderWidth: 1,
    width: '90%',
    height: '30%',

    marginBottom: 30,

    paddingVertical: 30,
    paddingHorizontal: 10
  },

  title: {
    color: '#FFF',
    fontWeight: 'bold',

    fontSize: 20,
    marginBottom: 15
  },

  fieldsView: {
    borderColor: '#F00',
    borderStyle: 'solid',
    borderWidth: 1,
    width: '90%',
    height: '25%',

    marginBottom: 40,

    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  warningText: {
    color: '#FFF',
    fontWeight: 'bold',
    padding: 5
  },

  btnsView: {
    borderColor: '#F00',
    borderStyle: 'solid',
    borderWidth: 1,

    width: '90%',
    height: '17%',

    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  btnGO: {
    backgroundColor: '#FFF',
    width: '100%',
    height: '35%',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 50
  },

  btnGoText: {
    fontWeight: 'bold',
    color: '#EF7562',
    fontSize: 15
  },

  btnSignUp: {
    width: '100%',
    height: '35%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnSignUpText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15
  },

  formField: {
    width: '100%',
    height: '25%',
    borderRadius: 50,
    textAlign: 'center',

    color: '#FFF',
    backgroundColor: '#F39789',
    fontWeight: 'bold',
    fontSize: 15
  }
});