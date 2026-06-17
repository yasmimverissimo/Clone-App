import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Alert, Image } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/RootStackParams'; 
import { styles } from './style';

export default function LoginSenha() {
  const [senha, setSenha] = useState('');
  
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'LoginSenha'>>();
  
  
  const route = useRoute<RouteProp<RootStackParamList, 'LoginSenha'>>();
  const { cpf } = route.params; 

  const handleEntrar = () => {
  
    if (!senha.trim()) {
      Alert.alert('Atenção', 'Por favor, insira sua senha para entrar.');
      return; 
    }

    if (senha.length < 4) {
      Alert.alert('Atenção', 'A senha deve ter pelo menos 4 dígitos.');
      return;
    }

    navigation.replace('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()} 
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>


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

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Digite sua senha</Text>
          <TextInput 
            style={styles.input} 
            placeholder="••••••" 
            secureTextEntry
            placeholderTextColor="rgba(255,255,255,0.6)"
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        <TouchableOpacity 
          style={styles.button} 
          onPress={handleEntrar} 
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}