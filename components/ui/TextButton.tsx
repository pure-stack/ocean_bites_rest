import {Colors} from '@/constants/Colors'
import {Pressable} from 'react-native'
import {textStyles} from '@/styles/text'
import Text from '@/components/ui/Text'

interface ITextButtonProps {
    text: string;
    onPress: () => void;
}

const TextButton = (props: ITextButtonProps) => {
    const {text, onPress} = props

    return (
      <Pressable onPress={onPress}>
          <Text text={text} textColor={Colors.light.primary} styles={{...textStyles.title}}/>
      </Pressable>

    )
}

export default TextButton
