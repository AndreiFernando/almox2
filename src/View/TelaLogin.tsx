import React from 'react'
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native'
import CustomTextInput from '../components/CustomTextInput';
import HomeViewModel from './ViewModel';
import RouderdButton from '../components/botaoGeral';
import { CheckBox } from 'react-native-elements';

export default function TelaLogin() {
  const { email, senha, onChange, register } = HomeViewModel();
  const [isChecked1, setChecked1] = React.useState(false);

  return (
  
      <View style={styles.container}>
        <View style={styles.containerLogo}>
          <Image
            source={require('./assets/img/senac-logo.png')}
            style={styles.logo} />
        </View>

        <View style={styles.inputs}>
          <CustomTextInput
            placeholder='Usuario'
            KeyboardType='default'
            value={senha}
            property='senha'
            onChangeText={onChange}

          />
        </View>
        <View>
          <CustomTextInput
            placeholder='Senha'
            KeyboardType='default'
            value={email}
            property='email'
            onChangeText={onChange}

          />
        </View>

        <View style={styles.containerCheck}>
          <CheckBox
            title="Lembrar usuario"
            checked={isChecked1}
            onPress={() => setChecked1(!isChecked1)}
            containerStyle={styles.checkbox}
            checkedColor="white"
            uncheckedColor="white"
            textStyle={{ color: 'white' }}
          />
          <Text style={styles.texto}>
            Esqueceu sua senha?
          </Text>
        </View>
        <View style={styles.botaoGeral}>
          <RouderdButton
            lblButton='Login'
            onPress={() => register()} />
        </View>

        <View style={styles.containerTexto}>
          <Text style={styles.Cadastro}>
            Ainda não possui uma conta? <Text style={styles.texto}>Cadastre-se</Text>
          </Text>
        </View>
      </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00ADB5',
    flex: 1,
  
  },
  containerLogo: {
    alignItems: 'center',
    paddingTop: 90


  },
  logo: {
    width: 224,
    height: 176,

  },
  
  texto: {
    color: 'white',
    fontWeight: 'bold',

  },
  containerCheck: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 391,
    alignSelf: 'center',
   

  },

  checkbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    color: 'white'

  },
  botaoGeral: {
    alignItems: 'center',
    padding: 100
  },
  containerTexto: {
    alignItems: 'center'
  },
  Cadastro: {
    fontWeight: 'normal',
    color: 'white'
  },
  inputs: {
    padding: 30
  }

});