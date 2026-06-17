import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/RootStackParams'; 
import { styles } from './style'; 

export default function LoginCPF() {
  const [cpf, setCpf] = useState('');
  

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'LoginCPF'>>();

  const handleContinuar = () => {

    if (!cpf.trim()) {
      Alert.alert('Atenção', 'Por favor, digite o seu CPF para continuar.');
      return; 
    }

    if (cpf.length < 14) {
      Alert.alert('Atenção', 'Por favor, insira um CPF válido.');
      return;
    }

    navigation.navigate('LoginSenha', { cpf });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{ width: 24, marginLeft: 16 }} />
        

        <View style={styles.logoContainer}>
          <Image 
            source={require('../../assets/logo rio card mais.png')} 
            style={styles.logoImage} 
          />
        </View>
        
        <View style={{ width: 24, marginRight: 16 }} />
      </View>

      <View style={styles.content}>
        <Text style={styles.heading}>Entre ou cadastre-se</Text>
        <Text style={styles.subheading}>
          Informe o seu CPF e clique em continuar para realizar o login ou cadastrar-se!
        </Text>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>CPF</Text>
          <TextInput
            style={styles.input}
            placeholder="___________"
            keyboardType="numeric"
            placeholderTextColor="rgba(255,255,255,0.6)"
            maxLength={14} 
            value={cpf}
            onChangeText={setCpf}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleContinuar} 
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>CONTINUAR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}