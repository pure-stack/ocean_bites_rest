import Text from '@/components/ui/Text'
import {Pressable} from 'react-native'
import {Colors} from '@/constants/Colors'
import DeleteIcon from '../../../../build-track/assets/images/icons/DeleteIcon'

interface IDeleteButtonProps {
    onPress: () => void
}

const DeleteButton = (props: IDeleteButtonProps) => {
    const { onPress} = props

    return (
      <Pressable
        onPress={onPress}
        style={{
            position: 'absolute',
            right: -10,
            top: -7,
            zIndex: 1,
            width: 20,
            height: 20,
            alignItems: 'center',
            borderRadius: '50%',
            borderWidth: 0,
            outline: 'none',
            backgroundColor: Colors.light.error,
        }}
      >
            <DeleteIcon />
      </Pressable>
    )
}

export default DeleteButton
