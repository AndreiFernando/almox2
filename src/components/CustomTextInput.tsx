import React from 'react'
import { StyleSheet, View, TextInput, KeyboardType, Text } from 'react-native';


interface props {
    
    placeholder: string,
    KeyboardType: KeyboardType,
    value: string,
    property: string,
    onChangeText: (property: string, value: any) => void,
    secureTextEntry?: boolean
}


export default function CustomTextInput({ placeholder, KeyboardType, value, property, secureTextEntry = false, onChangeText }: props) {
    return (
        <View style={styles.container}>


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
    container: {
        alignSelf: 'center'
    },
    txtLabel: {
        fontSize: 16,
        color: 'white'
    },
    txtForm: {
        width: 391,
        height: 50,
        borderRadius: 10,
        backgroundColor: 'white',
        paddingLeft: 5

    },
});