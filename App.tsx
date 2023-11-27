import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './src/view/TelaLogin';
import TelaCadastro from './src/view/TelaCadastro';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  TelaLogin: undefined,
  TelaCadastro: undefined

}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, }}>
        <Stack.Screen
          name='TelaLogin'
          component={TelaLogin} />

        <Stack.Screen
          name='TelaCadastro'
          component={TelaCadastro}
          options={{
            headerShown: true,


          }} />

      </Stack.Navigator>
    </NavigationContainer>
  )
};
export default App;