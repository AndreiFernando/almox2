import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../../App';


export const BottomTabNavigator = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.tabBg}>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('TelaHome')}>
          <Text><Ionicons name="home" style={styles.tabIconHome} /></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ModalComponent')}>
          <Text><Ionicons name="add-circle" style={styles.tabIconAdicionar} /></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TelaAlmox')}>
          <Text><Ionicons name="cog-outline" style={styles.tabIconAlmox} /></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  tabBg: {
    backgroundColor: '#393E46',
    bottom: 0,
    borderRadius: 16,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    width: "100%",
    position: 'absolute',
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 70,
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
  },
  tabIconHome: {
    fontSize: 26,
    color: "#00ADB5",
  },
  tabIconAlmox: {
    fontSize: 34,
    color: "#00ADB5",
  },
  tabIconAdicionar: {
    fontSize: 45,
    color: "#00ADB5",
  },
});