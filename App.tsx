import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './src/view/TelaLogin';
import TelaCadastro from './src/view/TelaCadastro';
import TelaHome from './src/view/TelaHome';
import TelaAlmox from './src/view/TelaAlmox';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  TelaLogin: undefined,
  TelaCadastro: undefined,
  TelaHome: undefined,
  TelaAlmox: undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, }}>
        <Stack.Screen
          name='TelaLogin'
          component={TelaLogin}/>

        <Stack.Screen
          name='TelaCadastro'
          component={TelaCadastro}
          options={{
            headerShown: false,
          }} />

        <Stack.Screen
          name='TelaHome'
          component={TelaHome}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen
          name='TelaAlmox'
          component={TelaAlmox}
          options={{
            headerShown: false,
          }} />

      </Stack.Navigator>
    </NavigationContainer>
  )
};
export default App;