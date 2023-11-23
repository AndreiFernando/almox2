import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  dataDay: string,
  dataWeekDay: string,
}

export const BtnCalendarioAtivo = ({ dataDay, dataWeekDay }: Props) => {
  return (
    <TouchableOpacity style={styles.btnCalendarioAtivo}>
      <Text style={styles.textoBtnCalendario}>{dataDay}</Text>
      <Text style={styles.textoSemana}>{dataWeekDay}</Text>
      <View style={styles.decorativo}></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnCalendarioAtivo: {
    maxwidth: 40,
    backgroundColor: '#FFFFFF',
    color: '#393E46',
    padding: 10,
    paddingTop: 15,
    paddingBottom: 6,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#393E46',
    alignItems: 'center',
  },
  textoBtnCalendario: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  textoSemana: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingBottom: 5,
  },
  decorativo: {
    width: 15,
    height: 15,
    backgroundColor: '#00ADB5',
    borderWidth: 1,
    borderColor: '#393E46',
    borderRadius: 50,
  }
});