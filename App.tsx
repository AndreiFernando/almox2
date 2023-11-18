// Tela1.js
import React from 'react';
import { View, Text } from 'react-native';
import Navbar from './src/components/Navbar';

const Tela1 = ({ navigation }) => {
  return (
    <View>
      <Navbar
        title="Tela 1"
        onPressBack={() => navigation.goBack()}
        onPressOption1={() => console.log('Opção 1 pressionada')}
        onPressOption2={() => console.log('Opção 2 pressionada')}
      />
      <View style={{ padding: 20 }}>
        <Text>Conteúdo da Tela 1</Text>
      </View>
    </View>
  );
};

export default Tela1;