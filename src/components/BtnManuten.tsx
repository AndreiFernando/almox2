import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


interface Props {
    onPress: () => void,
    lblButton: string
}

export const BotaoManutencao = ({ onPress, lblButton }: Props) => {
    return (
        <TouchableOpacity
            style={styles.botao}
            onPress={() => onPress()}

        >
            <Text style={styles.lblButton}>{ lblButton }</Text>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    botao: {
        marginHorizontal: 40,
        alignItems: 'center',
        borderBlockColor: '#00ADB5',
        borderColor: '#00ADB5',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
    },
    lblButton:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#393E46',
        paddingTop: 25,
        paddingBottom: 25,
    }
});