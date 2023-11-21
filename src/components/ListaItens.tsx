import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const ItemLista = () => {
    return (
        <View style={styles.item}>
            <View>
                <Text style={styles.nomeItem}>Chave de Fenda</Text>
                <Text style={styles.quantidadeItem}>Em estoque: 2</Text>
            </View>
            <View>
                <Text>Icon</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    item: {
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#EAEAEA',
    },
    nomeItem: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#393E46',
    },
    quantidadeItem: {
        fontSize: 14,
    }
});