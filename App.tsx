import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routers/index';

export default function App() {
  return (
    <NavigationContainer>
      {/* Força os ícones da barra de status do celular (bateria, hora) a ficarem brancos por causa do fundo azul */}
      <StatusBar barStyle="light-content" backgroundColor="#0084EC" />
      
      <AppRoutes />
    </NavigationContainer>
  );
}
