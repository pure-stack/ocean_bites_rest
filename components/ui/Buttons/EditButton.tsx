import {Pressable} from 'react-native'
import {Colors} from '@/constants/Colors'
import EditIcon from '../../../../build-track/assets/images/icons/EditIcon'

interface IEditButtonProps {
    onPress: () => void
}

const EditButton = (props: IEditButtonProps) => {
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
            backgroundColor: Colors.light.blue
        }}
      >
          <EditIcon/>
      </Pressable>
    )
}

export default EditButton
