import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export const Navbar = ({ onPressBack, onPressOption1, onPressOption2 }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handlePressOption = (option) => {
    setSelectedOption(option);
    if (option === 'option1') {
      onPressOption1();
    } else if (option === 'option2') {
      onPressOption2();
    }
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.backButton} onPress={onPressBack}>
        <FontAwesome name="arrow-left" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>Almoxarifado</Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={[styles.optionButton, selectedOption === 'option1' && styles.selectedOption]}
          onPress={() => handlePressOption('option1')}
        >
          <Text style={styles.buttonText}>Manutenção</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.optionButton, selectedOption === 'option2' && styles.selectedOption]}
          onPress={() => handlePressOption('option2')}
        >
          <Text style={styles.buttonText}>Materiais</Text>
        </TouchableOpacity>
      </View>
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
    flexDirection: 'column', justifyContent: 'space-between',
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  optionButton: {
    paddingVertical: 8,
  },
  selectedOption: {
    borderBottomWidth: 2,
    borderBottomColor: 'white',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
});

export default Navbar;
