// Navbar.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Certifique-se de instalar o pacote @expo/vector-icons

export const NavbarEstoque = ({ onPressBack}) => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.backButton} onPress={onPressBack}>
        <FontAwesome name="arrow-left" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>Manutenção</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#00ADB5',
    width: '100%',
    height: 155,
    alignItems: 'center',
    paddingTop: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  backButton: {
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default NavbarEstoque;
