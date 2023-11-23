import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props{
  dataDay:string,
  dataWeekDay:string,
}

export const BtnCalendario = ({ dataDay, dataWeekDay}:Props) =>  {
    return (
        <TouchableOpacity style={styles.btnCalendario}>
          <Text style={styles.textoBtnCalendario}>{ dataDay}</Text>
          <Text style={styles.textoBtnCalendario}>{ dataWeekDay }</Text>
        </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    btnCalendario: {
      maxwidth: 40,
      backgroundColor: '#393E46',
      color: '#EEEEEE',
      padding: 10,
      paddingTop: 14,
      paddingBottom: 14,
      borderRadius: 40,
    },
    textoBtnCalendario: {
      textAlign: 'center',
      fontSize: 14,
      color: 'white',
      textTransform: 'uppercase',
    },
  });