import {Colors} from '@/constants/Colors'
import {Pressable} from 'react-native'
import DeleteTrashIcon from '../../../../build-track/assets/images/icons/DeleteTrashIcon'

interface IDeleteTrashButtonProps {
    onPress: () => void
}

const DeleteTrashButton = (props: IDeleteTrashButtonProps) => {
    const {onPress} = props

    return (
      <Pressable
        onPress={onPress}
        style={{
            zIndex: 1,
            width: 45,
            height: 48,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 0,
            outline: 'none',
            backgroundColor: Colors.light.error
        }}
      >
          <DeleteTrashIcon/>
      </Pressable>
    )
}

export default DeleteTrashButton
