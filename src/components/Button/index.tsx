import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export const RiocardButton: React.FC<ButtonProps> = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: { 
    backgroundColor: '#0055A4', 
    padding: 15, 
    borderRadius: 25, 
    alignItems: 'center' },
    text: { color: '#FFF', 
    fontWeight: 'bold' }
});