import React from 'react';

import {
  View,
  Text,
  KeyboardAvoidingView
} from 'react-native';

import { styles } from './styles';

export function Cadastro() {
  return (
    <KeyboardAvoidingView behavior="position" style={ styles.container }>
      <View style={ styles.titleView }>
        <Text style={ styles.title }>Crie uma conta</Text>
      </View>

      <View style={ styles.fieldsView }>
        <Text>LALALALA</Text>
      </View>

      <View style={ styles.btnView }>
        <Text>BTN</Text>
      </View>
    </KeyboardAvoidingView>
  )
}