import React, { useState } from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import {LinearGradient} from 'expo-linear-gradient';

import { globalColors } from '../../globalStyles';

export function Login() {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //Aviso caso vazios.
  const [usernameWarning, setUsernameWarning] = useState(false);
  const [passwordWarning, setPasswordWarning] = useState(false);

  function login(): void {
    setUsernameWarning(!usernameWarning);
    setPasswordWarning(!passwordWarning); 
  }

  function redirectToCadastro() {
    navigation.navigate('Cadastro');
  }

  return (
      <LinearGradient colors={[globalColors.startGradientColor, globalColors.endGradientColor ]} style={styles.gradientContainer}>
        <KeyboardAvoidingView style={styles.container} behavior="height">
        
            <View style={styles.imageView}>

            </View>

          <View style={styles.fieldsView}>
            <Text style={styles.title}>Faça seu Login!</Text>
            <TextInput
              placeholder="Usuário"
              style={styles.formField}
              placeholderTextColor="#FFF"
              onChangeText={(text: string) => setUsername(text)}
            >
            </TextInput>
            <Text style={[usernameWarning ? { display: 'flex' } : { display: 'none' }, styles.warningText]}>Usuário precisa ser preenchido.</Text>

            <TextInput
              placeholder="Senha"
              style={styles.formField}
              placeholderTextColor="#FFF"
              secureTextEntry={true}
              onChangeText={(text: string) => setPassword(text)}
            ></TextInput>
            <Text style={[passwordWarning ? { display: 'flex' } : { display: 'none' }, styles.warningText]}>Senha precisa ser preenchida.</Text>

          </View>

          <View style={styles.btnsView}>
            <TouchableOpacity style={styles.btnGO} onPress={login}>
              <Text style={styles.btnGoText}>GO!</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSignUp} onPress={redirectToCadastro}>
              <Text style={styles.btnSignUpText}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>

          
        </KeyboardAvoidingView>
      </LinearGradient>
  );
}


