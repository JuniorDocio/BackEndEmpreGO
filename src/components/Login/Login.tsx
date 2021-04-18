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

import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


import { globalColors } from '../../globalStyles';

export function Login() {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //Aviso caso vazios.
  const [usernameWarning, setUsernameWarning] = useState(false);
  const [passwordWarning, setPasswordWarning] = useState(false);
  const [secureTextToggle, setSecureTextToggle] = useState<boolean>(true);
  const [eyePasswordIcon, setEyePasswordIcon] = useState<any>('eye');

  function login(): void {
    setUsernameWarning(!usernameWarning);
    setPasswordWarning(!passwordWarning); 
  }

  function redirectToCadastro() {
    navigation.navigate('Cadastro');
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
        
            <View style={styles.imageView}>

            </View>

          <View style={styles.fieldsView}>
            <Text style={styles.title}>Faça seu Login!</Text>

            <View style={ styles.inputFieldContainer }>
              <View style={ styles.iconContainer }>
                <FontAwesome5 name="user" size={20} color="#EF7562" />
              </View>

              <TextInput
                placeholder="Nome de Usuário"
                style={styles.iconTextInput}
                placeholderTextColor="#FFF"
                onChangeText={(text: string) => setUsername(text)}
              >
              </TextInput>
            </View>

            <View style={ styles.inputFieldContainer }>
              <View style={ styles.iconContainer }>
                <MaterialIcons name="lock-outline" size={24} color="#EF7562" />
              </View>

              <TextInput
                placeholder="Senha"
                style={styles.iconTextInput}
                placeholderTextColor="#FFF"
                secureTextEntry={ secureTextToggle }
                onChangeText={(text: string) => setPassword(text)}
              ></TextInput>

              <TouchableOpacity onPress={ toggleShowPassword }>
                <Entypo name={eyePasswordIcon} size={22} color="white" />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={ styles.forgotPasswordBtn }>
              <Text style={ styles.forgotPasswordBtnText }>Esqueceu sua senha?</Text>
            </TouchableOpacity>

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


