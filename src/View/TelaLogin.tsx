import React from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import CustomTextInput from '../components/CustomTextInput';
import HomeViewModel from './ViewModel';
import RouderdButton from '../components/botaoGeral';
import { CheckBox } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { StackNavigationProp } from '@react-navigation/stack';

const TelaLogin = () => {
  const { email, senha, onChange, register } = HomeViewModel();
  const [isChecked1, setChecked1] = React.useState(false);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (

    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image
          source={require('../../assets/img/senac-logo.png')}
          style={styles.logo} />
      </View>

      <View style={styles.inputs}>
        <CustomTextInput
          placeholder='Usuario'
          KeyboardType='default'
          value={email}
          property='senha'
          onChangeText={onChange}
        />
        <CustomTextInput
          placeholder='Senha'
          KeyboardType='default'
          value={senha}
          property='senha'
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
          onPress={() => {register(); navigation.navigate('TelaHome');}} />
      </View>

      <View style={styles.containerTexto}>

        <TouchableOpacity onPress={() => navigation.navigate('TelaCadastro')}>

          <Text style={styles.Cadastro}>
            Ainda não possui uma conta? <Text style={styles.texto}>Cadastre-se</Text>
          </Text>

        </TouchableOpacity>
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
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
  },

  checkbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    color: 'white'

  },
  botaoGeral: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 100,
    marginBottom: 100,
  },
  containerTexto: {
    alignItems: 'center'
  },
  Cadastro: {
    fontWeight: 'normal',
    color: 'white'
  },
  inputs: {
    paddingLeft: 10,
    paddingRight: 10,
  }

});
export default TelaLogin;