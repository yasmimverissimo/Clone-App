import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginCPF from '../pages/LoginCPF'; 
import LoginSenha from '../pages/LoginSenha'; 
import Home from '../pages/Home';

export const Routes = {
  LOGIN_CPF: 'LoginCPF',
  LOGIN_SENHA: 'LoginSenha',
  HOME: 'Home',
} as const;

export type RootStackParamList = {
  LoginCPF: undefined;
  LoginSenha: { cpf: string };
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <Stack.Navigator
      // ISSO DAQUI garante que o app sempre comece na tela de CPF:
      initialRouteName="LoginCPF"
      screenOptions={{
        headerShown: false, // Remove a barra padrão para usarmos nosso próprio botão voltar
      }}
    >
      <Stack.Screen name="LoginCPF" component={LoginCPF} />
      <Stack.Screen name="LoginSenha" component={LoginSenha} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}