import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Certifique-se de ter o pacote de ícones instalado

const NavbarInicial = ({ username }) => {
    return (
        <View style={styles.container}>
            {/* Texto no canto inferior esquerdo */}

            <Text style={styles.usuario}>Olá xxxxx {username},{'\n'}bem-vindo!</Text>

            {/* Ícone de usuário no canto superior direito */}
            <TouchableOpacity onPress={() => console.log('Abrir perfil')}>
                <FontAwesome name="user-o" size={38} color="white" />
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
        justifyContent: 'space-around'

    },

    usuario: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }

});


export default NavbarInicial;

