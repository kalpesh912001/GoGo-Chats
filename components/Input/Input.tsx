import { View, Text, TextInput, TextStyle, ViewStyle, TextInputChangeEventData, NativeSyntheticEvent } from 'react-native'
import React from 'react'

interface Props {
    containerStyle?: ViewStyle
    placeholder?: string,
    inputStyle?: TextStyle,
    onChangeText?: (text: string) => void,
    onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void,
    onBlur?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void,
    value?: any,
    secureTextEntry?: boolean,
    error?: string
}
const Input = (props: Props) => {
    const {
        containerStyle,
        placeholder,
        inputStyle,
        onChangeText,
        onChange,
        onBlur,
        value,
        secureTextEntry = false,
        error
    } = props
    return (
        <View style={[containerStyle, { gap: 10 }]}>
            <TextInput
                placeholder={placeholder}
                value={value}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
                onChange={onChange}
                onBlur={onBlur}
                style={[inputStyle, { padding: 10, fontSize: 16, width: '100%' }]}
            />
            <Text style={{ color: '#FF0000', fontSize: 14, marginBottom: 10 }}>{error}</Text>
        </View>
    )
}

export default Input