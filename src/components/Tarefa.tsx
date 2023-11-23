import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    tarefaTitulo: string,
    tarefaDesc: string,
}

export const Tarefa = ({ tarefaTitulo, tarefaDesc }: Props) => {
    return (
        <View style={styles.tarefa}>
            <View style={styles.decorativoTarefa}>
                <View style={styles.decorativoBolinha}></View>
                <View style={styles.decorativoLinha}></View>
            </View>
            <View style={styles.tarefaBloco}>
                <Text style={styles.tituloTarefa}>{tarefaTitulo}</Text>
                <Text style={styles.descTarefa}>{tarefaDesc}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    tarefa: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 20,
    },
    tarefaBloco: {
        padding: 10,
        paddingBottom: 50,
        maxWidth: 205,
    },
    decorativoTarefa: {
        alignItems: 'center',
    },
    decorativoBolinha: {
        width: 16,
        height: 16,
        backgroundColor: '#393E46',
        borderRadius: 50,
    },
    decorativoLinha: {
        height: 100,
        width: 3,
        backgroundColor: '#393E46',
    },
    tituloTarefa: {
        fontSize: 16,
        color: '#393E46',
        fontWeight: 'bold',
        marginBottom: 16,
    },
    descTarefa: {
        fontSize: 12,
        color: '#393E46',
    },
});