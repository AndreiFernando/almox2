import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomTextInput from './src/components/CustomTextInput';
import HomeViewModel from './src/View/ViewModel';
import RouderdButton from './src/components/botaoGeral';

export default function App() {
  const { email, senha, onChange, register } = HomeViewModel();
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Registre-se
      </Text>

      <CustomTextInput
        placeholder='Usuario'
        KeyboardType='default'
        value={email}
        property='Usuario'
        onChangeText={onChange}

      />

      <CustomTextInput
        placeholder='Email'
        KeyboardType='default'
        value={email}
        property='email'
        onChangeText={onChange}

      />

      <CustomTextInput
        placeholder='Senha'
        KeyboardType='default'
        value={senha}
        property='senha'
        onChangeText={onChange}

      />

      <CustomTextInput
        placeholder='Confirme sua senha'
        KeyboardType='default'
        value={senha}
        property='senha'
        onChangeText={onChange}

      />
      <Text style={styles.info}>
        Ao se registrar, você está de acordo com nossos <Text style={styles.termos}>termos de uso e nossa política de privacidade.</Text>
      </Text>
      <View style={styles.botaoGeral}>
        <RouderdButton
          lblButton='CADASTRAR'
          onPress={() => register()}
        />
      </View>

      <Text style={styles.texto}>
        Já tem uma conta?<Text style={styles.termos}> Conecte-se</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00ADB5',
    flex: 1,
    justifyContent: 'space-evenly'
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 27,
    color: 'white',
    textAlign: 'center'
  },
  info: {
    width: 391,
    color: 'white',
    alignSelf: 'center'
  },

  termos: {
    fontWeight: 'bold'
  },

  botaoGeral: {
    alignItems: 'center'
  },
  texto: {
    color: 'white',
    textAlign: 'center'
  }
})