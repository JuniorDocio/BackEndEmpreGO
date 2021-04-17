import { StyleSheet } from 'react-native';
import { globalColors } from '../../globalStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100
  },

  gradientContainer: {
    flex: 1,
  },

  title: {
    color: '#FFF',
    fontWeight: 'bold',

    fontSize: 20,
    marginBottom: 15
  },

  fieldsView: {
    width: '90%',
    height: '65%',

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
    width: '90%',
    height: '17%',

    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  btnSignUp: {
    backgroundColor: '#FFF',
    width: '100%',
    height: '35%',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 50
  },

  btnSignUpText: {
    fontWeight: 'bold',
    color: '#EF7562',
    fontSize: 15
  },

  formField: {
    width: '100%',
    height: '10%',
    borderRadius: 50,
    textAlign: 'left',
    paddingLeft: 20,

    color: '#FFF',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    fontSize: 15
  },

  pickerFormField: {
    width: '100%',
    height: '10%',
    borderRadius: 50,
    textAlign: 'left',
    justifyContent: 'center',
    paddingLeft: 15,

    color: '#FFF',
    backgroundColor: 'rgba(255, 255, 255, 0.25)'
  },

  picker: {
    color: "#FFF",
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },

  passwordFieldContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '10%',
    borderRadius: 50,
    textAlign: 'left',
    paddingHorizontal: 20,

    color: '#FFF',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },

  passwordFormField: {
    flex: 1,
    color: '#FFF',
    fontSize: 15
  },

  passwordIcon: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode : 'stretch',
    alignItems: 'center'
  }
});