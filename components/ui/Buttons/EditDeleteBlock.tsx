import {View} from 'react-native'
import EditButton from '@/components/ui/Buttons/EditButton'
import DeleteTrashButton from '@/components/ui/Buttons/DeleteTrashButton'

interface IEditDeleteBlockProps {
    onEdit: () => void;
    onDelete: () => void
}

const EditDeleteBlock = (props: IEditDeleteBlockProps) => {
    const {onEdit, onDelete} = props

    return (
      <View style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 8,
          overflow: 'hidden',
          width: 90,
          height: 48,
      }}>
          <EditButton onPress={onEdit}/>
          <DeleteTrashButton onPress={onDelete}/>
      </View>
    )
}

export default EditDeleteBlock
