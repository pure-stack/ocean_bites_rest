import EditDeleteBlock from '@/components/ui/Buttons/EditDeleteBlock'
import Text from '@/components/ui/Text'
import { RESERVATIONS } from '@/constants/localstorage'
import { IReservation } from '@/types/reservation'
import { removeItem } from '@/utils/AsyncStorage'
import { formatDate } from '@/utils/formatDate'
import { useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'

interface IReservationCardProps {
    item: IReservation;
    onEdit: (item: IReservation) => void;
    refresh: () => void;
}

const ReservationCard = (props: IReservationCardProps) => {
    const {item, onEdit, refresh} = props

    const [isSelected, setIsSelected] = useState(false)

    const handleSelectItem = () => {
        setIsSelected(prev => !prev)
    }

    const handleDeleteItem = async () => {
        try {
            await removeItem(RESERVATIONS, item.id, refresh)
        } catch (e) {
            console.log(e)
        }
    }

    const formattedDate = formatDate(new Date(item.dateTocome))
    const formattedTime = item.timeTocome

    return (
      <Pressable onPress={handleSelectItem}>
          <View style={styles.container}>
              <View style={styles.leftContainer}>
                  <Text text={item.name} type={'bold'}/>
                  <Text text={item.phone} type={'subtitle'}/>
                  <Text text={`${item.guests} guests`} type={'subtitle'}/>
              </View>
              <View style={styles.rightContainer}>
                  <Text text={formattedDate} type={'bold'}/>
                  <Text text={formattedTime} type={'subtitle'}/>
                  {item.specialRequest && <Text text={item.specialRequest} type={'subtitle'} numberOfLines={1}/>}
              </View>
              {isSelected && <EditDeleteBlock
                  onEdit={() => onEdit(item)}
                  onDelete={handleDeleteItem}/>}
          </View>
      </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: 12,
        marginBottom: 12,
        position: 'relative'
    },
    leftContainer: {
        flex: 1,
        gap: 4
    },
    rightContainer: {
        alignItems: 'flex-end',
        gap: 4,
        flex: 1
    }
})

export default ReservationCard 