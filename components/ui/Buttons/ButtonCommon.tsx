import {Pressable} from 'react-native'
import Text from '@/components/ui/Text'

interface IDeleteProps {
    title: string;
    bgColor: string;
    onPress: () => void;
}

const ButtonCommon = (props: IDeleteProps) => {
    const {title, bgColor, onPress} = props

    return (
      <Pressable
        onPress={onPress}
        style={{
            width: '100%',
            alignItems: 'center',
            borderRadius: 12,
            padding: 12,
            borderWidth: 0,
            outline: 'none',
            backgroundColor: bgColor,
            flex: 1
        }}
      >
          <Text text={title} />
      </Pressable>
    )
}

export default ButtonCommon
