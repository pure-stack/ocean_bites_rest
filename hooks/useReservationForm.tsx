import { IReservation } from '@/types/reservation'
import { formatSimplePhoneNumber, getPhoneValidationError, isValidPhoneNumber } from '@/utils/formatters'
import { useCallback, useState } from 'react'

const INITIAL_STATE: IReservation = {
    id: '',
    name: '',
    phone: '',
    dateTocome: new Date(),
    timeTocome: '',
    guests: 1,
    specialRequest: ''
}

export const useReservationForm = (initState?: IReservation) => {
    const [data, setData] = useState<IReservation>(initState ? initState : INITIAL_STATE)

    const isValid = () => {
        return data.name.length > 0 &&
          isValidPhoneNumber(data.phone) &&
          data.dateTocome &&
          data.timeTocome &&
          data.guests > 0
    }

    const getValidationError = () => {
        if (data.name.length === 0) {
            return 'error.empty'
        }

        const phoneError = getPhoneValidationError(data.phone)
        if (phoneError) {
            return phoneError
        }

        if (!data.dateTocome) {
            return 'error.date'
        }

        if (!data.timeTocome || data.timeTocome.length === 0) {
            return 'error.time'
        }

        if (data.guests <= 0) {
            return 'error.guests'
        }

        return null
    }

    const handleChange = useCallback((value: any, field: string) => {
        let formattedValue = value

        if (field === 'phone') {
            formattedValue = formatSimplePhoneNumber(value)
        }

        if (field === 'guests') {
            formattedValue = parseInt(value) || 1
        }

        setData(prev => ({...prev, [field]: formattedValue}))
    }, [])

    const clearForm = () => setData(INITIAL_STATE)

    return {data, handleChange, isValid, clearForm, getValidationError}
} 