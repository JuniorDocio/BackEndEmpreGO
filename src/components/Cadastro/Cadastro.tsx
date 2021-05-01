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
import { AxiosResponse } from 'axios';
import { api } from '../../services/api';
import { API_CADASTRO_ENDPOINT } from '../../config/config';
import { AuthResponse } from '../../models/AuthResponse';
import { AppStorage } from '../../utils/Storage';
import { useNavigation } from '@react-navigation/core';

interface SignUpData {
  email: string,
  senha: string,
  nome_completo: string,
  nome_usuario: string,
  cpf_cnpj: string
}

export function Cadastro() {
  const navigation = useNavigation();

  const [username, setUsername] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');

  const [secureTextToggle, setSecureTextToggle] = useState<boolean>(true);
  const [eyePasswordIcon, setEyePasswordIcon] = useState<any>('eye');
  const [btnSignUpDisabled, setBtnSignUpDisabled] = useState<boolean>(false);

  async function signUp() {

    const signUpData: SignUpData = {
      nome_usuario: username,
      cpf_cnpj: cpf,
      email,
      nome_completo: fullName,
      senha: password
    }

    try {
      const responseData: AxiosResponse<any> = await api.post(API_CADASTRO_ENDPOINT, signUpData);
      const authData: AuthResponse = await responseData.data;
  
      if(authData.auth) {
        await AppStorage.storeData("token_jwt", authData.token);
        navigation.navigate('Dashboard');
        console.info("LOGADO COM SUCESSO ATRAVÉS DO CADASTRO");
      }
    }
    catch(err) {
        //Mostrar alerta para o usuario saber que o login ou senha estão incorretos.
        //Não vou redirecionar usuario que nao foi logado.
        console.error("Erro ao cadastrar.", err); //placeholder
    }
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
            onChangeText={(text: string) => { setUsername(text) }}
          >
          </TextInput>

          <TextInput
            placeholder="Nome Completo"
            style={styles.formField}
            placeholderTextColor="#FFF"
            onChangeText={(text: string) => { setFullName(text) }}
          ></TextInput>

          <View style={styles.passwordFieldContainer}>
            <TextInput
              placeholder="Senha"
              style={styles.passwordFormField}
              placeholderTextColor="#FFF"
              secureTextEntry={ secureTextToggle }
              onChangeText={(text: string) => { setPassword(text) }}
            ></TextInput>

            <TouchableOpacity onPress={ toggleShowPassword }>
              <Entypo name={eyePasswordIcon} size={22} color="white" />
            </TouchableOpacity>
          </View>

          <TextInput
            placeholder="Email"
            style={styles.formField}
            placeholderTextColor="#FFF"
            onChangeText={(text: string) => { setEmail(text) }}
          ></TextInput>

          <TextInput
            placeholder="CPF"
            style={styles.formField}
            placeholderTextColor="#FFF"
            onChangeText={(text: string) => { setCpf(text) }}
          ></TextInput>

          <View style={styles.pickerFormField}>
            <Picker
              selectedValue="placeholder1"
              style={styles.picker}
            >

              <Picker.Item label="remover" value="placeholder1"/>
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