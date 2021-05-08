import { StyleSheet } from 'react-native';

import { StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  contentContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',

  },

  header: {
    height: '9%',
    backgroundColor: '#FFF',
    paddingTop: StatusBar.currentHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
    paddingHorizontal: 15
  },

  currentView: {
    height: '85%',

    paddingHorizontal: 10,
    paddingTop: 10
  },

  footer: {
    height: '6%',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  footerBtns: {
    alignItems: 'center',
    paddingVertical: 5
  }
})