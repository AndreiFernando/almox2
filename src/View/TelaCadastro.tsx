import React from 'react';
import { View, StyleSheet, Text, Touchable, TouchableOpacity } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import HomeViewModel from './ViewModel';
import RouderdButton from '../components/botaoGeral';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { StackNavigationProp } from '@react-navigation/stack';

const TelaCadastro = () => {
  const { email, senha, onChange, register } = HomeViewModel();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Registre-se
      </Text>
      <View style={styles.inputs}>
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
      </View>
      <Text style={styles.info}>
        Ao se registrar, você está de acordo com nossos <Text style={styles.termos}>termos de uso e nossa política de privacidade.</Text>
      </Text>
      <View style={styles.botaoGeral}>
        <RouderdButton
          lblButton='CADASTRAR'
          onPress={() => {register(); navigation.navigate('TelaHome');}}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('TelaLogin')}>
        <Text style={styles.texto}>
          Já tem uma conta?<Text style={styles.termos}> Conecte-se</Text>
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00ADB5',
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 27,
    color: 'white',
    textAlign: 'center',
    paddingTop: 50,
    marginBottom: 50,
  },
  info: {
    marginHorizontal: 10,
    color: 'white',
    alignSelf: 'center'
  },

  termos: {
    fontWeight: 'bold'
  },
  inputs: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  botaoGeral: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 40,
    marginBottom: 40,
  },
  texto: {
    color: 'white',
    textAlign: 'center'
  }
});

export default TelaCadastro;