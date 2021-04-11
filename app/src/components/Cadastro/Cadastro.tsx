import React, { useState } from 'react';

import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Picker
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { globalColors } from '../../globalStyles';

export function Cadastro() {

  const [escolaridade, setEscolaridade] = useState("");

  function signUp() {

  }

  return (
    <LinearGradient colors={[globalColors.startGradientColor, globalColors.endGradientColor ]} style={styles.gradientContainer}>
      <KeyboardAvoidingView style={styles.container} behavior="height">

        <View style={styles.fieldsView}>
          <Text style={styles.title}>Crie uma Conta!</Text>
          <TextInput
            placeholder="Nome de Usuário"
            style={styles.formField}
            placeholderTextColor="#FFF"
            onChangeText={(text: string) => {}}
          >
          </TextInput>

          <TextInput
            placeholder="Nome Completo"
            style={styles.formField}
            placeholderTextColor="#FFF"
            onChangeText={(text: string) => {}}
          ></TextInput>

          <TextInput
            placeholder="Senha"
            style={styles.formField}
            placeholderTextColor="#FFF"
            secureTextEntry={true}
            onChangeText={(text: string) => {}}
          ></TextInput>

          <TextInput
            placeholder="Email"
            style={styles.formField}
            placeholderTextColor="#FFF"
            onChangeText={(text: string) => {}}
          ></TextInput>

          <TextInput
            placeholder="CPF"
            style={styles.formField}
            placeholderTextColor="#FFF"
            onChangeText={(text: string) => {}}
          ></TextInput>

          <Picker
            selectedValue={escolaridade}
            style={styles.formField}
            onValueChange={(itemValue: any, itemIndex: any) => setEscolaridade(itemValue)}
            
          >

            <Picker.Item label="PLACEHOLDER 1" value="placeholder1"/>
            <Picker.Item label="PLACEHOLDER 2" value="placeholder2"/>
            <Picker.Item label="PLACEHOLDER 2" value="placeholder2"/>
            <Picker.Item label="PLACEHOLDER 2" value="placeholder2"/>

          </Picker>

        </View>

        <View style={styles.btnsView}>
          <TouchableOpacity style={styles.btnCriar} onPress={signUp}>
            <Text style={styles.btnGoText}>Criar Conta!</Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  )
}