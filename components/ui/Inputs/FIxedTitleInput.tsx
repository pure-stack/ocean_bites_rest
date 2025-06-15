import {KeyboardTypeOptions, StyleSheet, TextInput as RNTextInput, View} from 'react-native'
import Text from '@/components/ui/Text'
import DeleteButtonCross from '@/components/ui/Buttons/DeleteButtonCross'

interface IFixedTitleInputProps {
    fieldTitle: string;
    value: string;
    onChange: (text: string) => void;
    placeholder: string;
    keyboardType?: KeyboardTypeOptions
    additionalStyles?: any;
    onBtnClick: () => void;
}

const FixedTitleInput = (props: IFixedTitleInputProps) => {
    const {fieldTitle, value, onChange, placeholder, keyboardType = 'default', additionalStyles, onBtnClick} = props

    return (
      <View style={styles.container}>
          <Text text={fieldTitle} styles={styles.title}/>
          <RNTextInput defaultValue={value} onTouchStart={(e) => e.stopPropagation()} onChangeText={onChange}
                       keyboardType={keyboardType}
                       style={styles.input}
                       placeholder={placeholder} placeholderTextColor={'#FFFFFF80'}
                       maxLength={keyboardType === 'number-pad' ? 12 : 30}/>
          <DeleteButtonCross onPress={onBtnClick}/>
      </View>

    )
}

export default FixedTitleInput

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        width: 100,
        minWidth: 100
    },
    input: {
        flex: 1,
        height: 44,
        paddingVertical: 12,
        fontSize: 16,
        backgroundColor: '#2B3040',
        color: '#ffffff'
    }
})
