import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const BtnCalendario = () =>  {
    const [buttonStyle, setButtonStyle] = useState(styles.btnCalendario);
  
    const handlePress = () => {
      setButtonStyle(styles.btnCalendarioClicado);
    };
  
    return (
        <TouchableOpacity style={buttonStyle} onPress={handlePress}>
          <Text style={styles.textoBtnCalendario}>03</Text>
          <Text style={styles.textoBtnCalendario}>QUA</Text>
        </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    btnCalendario: {
      maxwidth: 40,
      backgroundColor: '#393E46',
      color: '#EEEEEE',
      padding: 10,
      paddingTop: 20,
      paddingBottom: 20,
      borderRadius: 40,
    },
    btnCalendarioClicado: {
      maxwidth: 40,
      backgroundColor: '#FFFFFF',
      color: '#393E46',
      padding: 10,
      paddingTop: 20,
      paddingBottom: 20,
      borderRadius: 40,
      borderWidth: 1,
      borderColor:'#393E46',
    },
    textoBtnCalendario: {
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });