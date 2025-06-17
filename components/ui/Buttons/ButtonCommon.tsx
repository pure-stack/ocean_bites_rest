import Text from '@/components/ui/Text';
import { Pressable } from 'react-native';

interface IDeleteProps {
    title: string;
    bgColor: string;
    onPress: () => void;
    disabled?: boolean;
}

const ButtonCommon = (props: IDeleteProps) => {
    const {title, bgColor, onPress, disabled = false} = props

    return (
      <Pressable
        disabled={disabled}
        onPress={onPress}
        style={{
            width: '100%',
            alignItems: 'center',
            borderRadius: 12,
            padding: 12,
            borderWidth: 0,
            opacity: disabled ? 0.4 : 1,
            backgroundColor: bgColor,
            flex: 1,
        }}
      >
          <Text text={title}/>
      </Pressable>
    )
}

export default ButtonCommon
