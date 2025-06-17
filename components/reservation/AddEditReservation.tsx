import PageWithHeader from '@/components/PageWithHeader'
import ReservationDetails from '@/components/reservation/ReservationDetails'
import ButtonCommon from '@/components/ui/Buttons/ButtonCommon'
import Text from '@/components/ui/Text'
import { Colors } from '@/constants/Colors'
import { RESERVATIONS } from '@/constants/localstorage'
import { useReservationForm } from '@/hooks/useReservationForm'
import { IReservation } from '@/types/reservation'
import { addItem, updateItem } from '@/utils/AsyncStorage'
import { getRandomId } from '@/utils/getRandomId'
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'

interface IAddEditReservationProps {
    reservation?: IReservation;
    handleClose: () => void;
    refresh: () => void;
    onSuccess?: (reservation: IReservation) => void;
}

const AddEditReservation = (props: IAddEditReservationProps) => {
    const {reservation, handleClose, refresh, onSuccess} = props
    const {data, handleChange, isValid, getValidationError} = useReservationForm(reservation)
    const [error, setError] = useState('')

    const handleSaveReservation = async () => {
        if (!isValid()) {
            const errorMessage = getValidationError()
            setError(errorMessage || 'error.correct')
            return
        }
        setError('')
        
        let savedReservation: IReservation

        if (reservation) {
            savedReservation = data
            await updateItem<IReservation>(RESERVATIONS, data, refresh)
        } else {
            savedReservation = {
                ...data,
                id: getRandomId()
            }
            await addItem<IReservation>(RESERVATIONS, savedReservation, refresh)
        }

        if (onSuccess) {
            onSuccess(savedReservation)
        } else {
            handleClose()
        }
    }

    const title = reservation ? 'Edit Reservation' : 'Reservation'

    return (
      <PageWithHeader title={title}>
          <ReservationDetails data={data} handleChange={handleChange} isEdit={true}/>
          
          {error && <Text text={error} textColor={Colors.light.error} styles={{
              margin: 'auto',
              marginTop: 16,
              textAlign: 'center'
          }}/>}
          
          <View style={styles.buttonContainer}>
              <ButtonCommon 
                  title={'Continue'} 
                  onPress={handleSaveReservation}
                  bgColor={Colors.light.primary}
              />
          </View>
      </PageWithHeader>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: 50,
    }
})

export default AddEditReservation 