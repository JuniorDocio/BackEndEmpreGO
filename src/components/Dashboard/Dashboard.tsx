import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { globalColors } from '../../globalStyles';
import { AppStorage } from '../../utils/Storage';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export function Dashboard() {
  const navigation = useNavigation();

  async function logout() {
    await AppStorage.deleteData("token_jwt");
    navigation.navigate('Login');
  }

  return (
    <LinearGradient colors={[globalColors.startGradientColor, globalColors.endGradientColor ]} style={styles.gradientContainer}>
      <Text style={styles.text}>DASHBOARD TESTE</Text>
      <TouchableOpacity style={styles.btn} onPress={ logout }>
        <Text style={styles.sair}>SAIR</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}