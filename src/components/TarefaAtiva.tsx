import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  tarefaTitulo: string,
  tarefaDesc: string,
}

export const TarefaAtiva = ({ tarefaTitulo, tarefaDesc }: Props) => {
  return (
    <View style={styles.tarefa}>
      <View style={styles.decorativoTarefa}>
        <View style={styles.decorativoBolinha}></View>
        <View style={styles.decorativoLinha}></View>
      </View>
      <TouchableOpacity style={styles.tarefaBloco}>
        <Text style={styles.tituloTarefa}>{tarefaTitulo}</Text>
        <Text style={styles.descTarefa}>{tarefaDesc}</Text>
      </TouchableOpacity>
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
    backgroundColor: '#484E57',
    borderWidth: 1,
    borderColor: '#393E46',
    borderRadius: 10,
    padding: 10,
    paddingRight: 32,
    paddingBottom: 50,
    maxHeight: 120,
    maxWidth: 200,
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
    height: 150,
    width: 3,
    backgroundColor: '#393E46',
  },
  tituloTarefa: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  descTarefa: {
    fontSize: 14,
    color: 'white',
  },
});