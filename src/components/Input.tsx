import React from 'react'
import { StyleSheet, View, TextInput, KeyboardType, Text} from 'react-native';

interface props {
    placeholder: string,
    label: string,
    KeyboardType: KeyboardType,
    value: string,
    property: string,
    onChangeText: (property: string, value: any) => void,
    secureTextEntry?: boolean
}


export default function CustomTextInput ({ placeholder, label, KeyboardType, value, property, secureTextEntry = false, onChangeText }: props) {
    return (
        <View style={styles.formInput}>
            <Text style={styles.txtLabel}>{label}</Text>

            <TextInput style={styles.txtForm}
                placeholder={placeholder}
                keyboardType={KeyboardType}
                value={value}
                secureTextEntry={secureTextEntry}
                onChangeText={text => onChangeText(property, text)}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    formInput: {
        justifyContent: 'center',
        alignItems: 'center'


    },
    txtLabel: {
        fontSize: 16,
        color: 'white'
    },
    txtForm: {
        width: 391,
        height: 50,
        borderRadius: 10,
        
    },
});