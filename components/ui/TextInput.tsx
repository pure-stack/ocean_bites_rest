import {InputModeOptions, KeyboardTypeOptions, StyleSheet, TextInput as RNTextInput, View} from 'react-native'
import Text from '@/components/ui/Text'
import {textStyles} from '@/styles/text'
import {useTranslation} from 'react-i18next'

interface ITextInputProps {
    value: string;
    onChange: (text: string) => void;
    text: string;
    placeholder: string;
    inputMode?: InputModeOptions
    keyboardType?: KeyboardTypeOptions
    additionalStyles?: any;
}

const TextInput = (props: ITextInputProps) => {
    const {value, onChange, text, placeholder, inputMode = 'text', keyboardType = 'default', additionalStyles} = props
    const {t} = useTranslation()

    return (
      <View style={[styles.container, additionalStyles]}>
          <Text text={text} styles={textStyles.title}/>
          <RNTextInput defaultValue={value} onChangeText={onChange} keyboardType={keyboardType}
                       style={styles.input}
                       placeholder={t(placeholder)} placeholderTextColor={'#FFFFFF99'} maxLength={12}/>
      </View>
    )
}

export default TextInput

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
        backgroundColor: '#2C3753',
        color: '#ffffff'
    }
})
