import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStackParams';
import LoginCPF from '../pages/LoginCPF/index';
import LoginSenha from '../pages/LoginSenha/index';
import Home from '../pages/Home';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="LoginCPF" component={LoginCPF} options={{ title: 'Login' }} />
      <Stack.Screen name="LoginSenha" component={LoginSenha} options={{ title: 'Senha' }} />
      <Stack.Screen name="Home" component={Home} options={{ title: 'Início', headerBackVisible: false }} />
    </Stack.Navigator>
  );
}