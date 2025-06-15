import {Pressable} from 'react-native'
import DeleteIconCross from '../../../../build-track/assets/images/icons/DeleteIconCross'

interface IDeleteButtonCrossProps {
    onPress: () => void
}

const DeleteButtonCross = (props: IDeleteButtonCrossProps) => {
    const {onPress} = props

    return (
      <Pressable
        onPress={onPress}
        style={{
            zIndex: 1,
            width: 24,
            minWidth: 24,
            height: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            borderWidth: 0,
            outline: 'none',
            marginLeft: 'auto'
        }}
      >
          <DeleteIconCross/>
      </Pressable>
    )
}

export default DeleteButtonCross
