// Navbar.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Certifique-se de instalar o pacote @expo/vector-icons

export const Navbar = ({ title, onPressBack, onPressOption1, onPressOption2 }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={onPressBack}>
        <FontAwesome name="arrow-left" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton} onPress={onPressOption1}>
          <Text style={styles.optionText}>Opção 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={onPressOption2}>
          <Text style={styles.optionText}>Opção 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#128C7E', // Cor de fundo da navbar
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  backButton: {
    padding: 5,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  optionsContainer: {
    flexDirection: 'row',
  },
  optionButton: {
    marginLeft: 15,
  },
  optionText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Navbar;
