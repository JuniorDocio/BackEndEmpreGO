import React, { useState } from 'react';

import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Picker
} from 'react-native';

import { Entypo } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { globalColors } from '../../globalStyles';

export function Cadastro() {

  const [escolaridade, setEscolaridade] = useState<string>('');
  const [secureTextToggle, setSecureTextToggle] = useState<boolean>(true);
  const [eyePasswordIcon, setEyePasswordIcon] = useState<any>('eye');
  const [btnSignUpDisabled, setBtnSignUpDisabled] = useState<boolean>(false);

  function signUp() {

  }

  function toggleShowPassword() {
    if(secureTextToggle) {
      setEyePasswordIcon('eye-with-line');
      setSecureTextToggle(!secureTextToggle);
    }
    else {
      setEyePasswordIcon('eye')
      setSecureTextToggle(!secureTextToggle);
    }
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

          <View style={styles.passwordFieldContainer}>
            <TextInput
              placeholder="Senha"
              style={styles.passwordFormField}
              placeholderTextColor="#FFF"
              secureTextEntry={ secureTextToggle }
              onChangeText={(text: string) => {}}
            ></TextInput>

            <TouchableOpacity onPress={ toggleShowPassword }>
              <Entypo name={eyePasswordIcon} size={22} color="white" />
            </TouchableOpacity>
          </View>

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

          <View style={styles.pickerFormField}>
            <Picker
              selectedValue={escolaridade}
              style={styles.picker}
              onValueChange={(itemValue: any, itemIndex: any) => setEscolaridade(itemValue)}
              
            >

              <Picker.Item label="Placeholder 1" value="placeholder1"/>
              <Picker.Item label="PLACEHOLDER 2" value="placeholder2"/>
              <Picker.Item label="PLACEHOLDER 2" value="placeholder2"/>
              <Picker.Item label="PLACEHOLDER 2" value="placeholder2"/>

            </Picker>
          </View>

        </View>

        <View style={styles.btnsView}>
          <TouchableOpacity style={styles.btnSignUp} onPress={signUp} disabled={ btnSignUpDisabled }>
            <Text style={styles.btnSignUpText}>Criar Conta!</Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  )
}