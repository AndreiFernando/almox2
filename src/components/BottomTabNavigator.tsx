// BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//caminhos
//import Home from './pages/Home';
//import Adicionar from './pages/Adicionar';
//import Preferencias from './pages/Preferencias';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#393E46',
          borderTopWidth: 0,
          borderRadius: 16,
          height: 60,
          position: 'absolute',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" size={25} color="#00ADB5" />;
            }

            return <Ionicons name="home-outline" size={25} color="#00ADB5" />;
          },
        }}
      />

      <Tab.Screen
        name="Adicionar"
        component={Adicionar}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="add-circle" size={45} color="#00ADB5" />;
            }

            return (
              <Ionicons name="add-circle-outline" size={45} color="#00ADB5" />
            );
          },
        }}
      />

      <Tab.Screen
        name="Preferencias"
        component={Preferencias}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="cog-outline" size={35} color="#00ADB5" />;
            }

            return <Ionicons name="cog" size={35} color="#00ADB5" />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;