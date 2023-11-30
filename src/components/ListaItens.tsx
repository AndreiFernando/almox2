import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { StackNavigationProp } from '@react-navigation/stack';

interface Props {
    lblItem: string,
}

export const ItemLista = ({ lblItem }: Props) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    return (
        <View style={styles.item}>
            <View>
                <Text style={styles.nomeItem}>{ lblItem }</Text>
                <Text style={styles.quantidadeItem}>Em estoque: 2</Text>
            </View>
            <TouchableOpacity  onPress={() => navigation.navigate('ModalMenor')}>
                <Ionicons name="ellipsis-vertical" size={24}/>
            </TouchableOpacity>
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