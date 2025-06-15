import {InputModeOptions, KeyboardTypeOptions, StyleSheet, TextInput as RNTextInput, View} from 'react-native'
import {useTranslation} from 'react-i18next'
import React from 'react'
import Text from '@/components/ui/Text'
import {Colors} from '@/constants/Colors'

interface ITextInputWithTitleProps {
    value: string;
    onChange: (text: string) => void;
    text: string;
    placeholder: string;
    inputMode?: InputModeOptions
    keyboardType?: KeyboardTypeOptions
    additionalStyles?: any;
}

const TextInputWithTitle = (props: ITextInputWithTitleProps) => {
    const {value, onChange, text, placeholder, inputMode = 'text', keyboardType = 'default', additionalStyles} = props
    const {t} = useTranslation()

    const maxLength = (keyboardType === 'number-pad' || keyboardType === 'phone-pad') ? 12 : 30

    return (
      <View style={[styles.container, additionalStyles]}>
          <Text text={text} type={'title'}/>
          <RNTextInput defaultValue={value} onChangeText={onChange} keyboardType={keyboardType}
                       style={styles.input}
                       placeholder={t(placeholder)} placeholderTextColor={Colors.light.placeholder}
                       maxLength={maxLength}/>
      </View>
    )
}

export default TextInputWithTitle

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
    },
    input: {
        height: 44,
        borderRadius: 10,
        padding: 12,
        backgroundColor: Colors.light.secondary,
        color: Colors.light.text
    }
})
