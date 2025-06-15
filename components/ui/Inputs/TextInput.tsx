import {InputModeOptions, KeyboardTypeOptions, StyleSheet, TextInput as RNTextInput} from 'react-native'

interface ITextInputProps {
    value: string;
    onChange: (text: string) => void;
    placeholder: string;
    inputMode?: InputModeOptions
    keyboardType?: KeyboardTypeOptions
    additionalStyles?: any;
    maxLength?: number;
}

const TextInput = (props: ITextInputProps) => {
    const {value, onChange, placeholder, inputMode = 'text', keyboardType = 'default', additionalStyles, maxLength} = props

    return (

      <RNTextInput defaultValue={value} onChangeText={onChange} keyboardType={keyboardType}
                   style={styles.input}
                   placeholder={placeholder} placeholderTextColor={'#FFFFFF50'}
                   maxLength={maxLength}/>
    )
}

export default TextInput

const styles = StyleSheet.create({
    input: {
        height: 44,
        paddingVertical: 12,
        backgroundColor: '#2B3040',
        color: '#ffffff',
    }
})
