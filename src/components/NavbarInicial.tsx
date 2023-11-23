import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Certifique-se de ter o pacote de ícones instalado

export const Navbar = ({ username }) => {
    return (
        <View style={styles.container}>
            {/* Texto no canto inferior esquerdo */}

            <Text style={styles.usuario}>Olá xxxxx {username},{'\n'}bem-vindo!</Text>

            {/* Ícone de usuário no canto superior direito */}
            <TouchableOpacity onPress={() => console.log('Abrir perfil')}>
                <FontAwesome name="user-o" size={26} color="white" style={styles.user} />
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 155,
        backgroundColor: '#00ADB5',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 40,
        padding: 40,
        marginBottom: 10,
    },

    usuario: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    user: {
        borderWidth: 1,
        borderColor: 'white',
        padding: 12,
        borderRadius: 100,
    },
});


export default Navbar;

