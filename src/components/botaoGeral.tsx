import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

interface Props{
    onPress: () => void,
    lblButton:string
}

const RouderdButton = ( {onPress, lblButton}:Props ) => {
    return(
        <TouchableOpacity 
             style={styles.roudedButton}
             onPress={() => onPress ()}
             
        >
            <Text style={styles.lblButton}>{ lblButton }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    roudedButton:{
        width: 391,
        height: 50,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        

    },
    

    lblButton:{
       color: '#000000',
       fontSize: 16,
       fontWeight: 'bold',
       textAlign: 'center',
      },
    });
    
    export default RouderdButton;