import {useCallback, useState} from 'react'
import {IProfile} from '@/types/profile'
import {formatSimplePhoneNumber, getPhoneValidationError, isValidPhoneNumber} from '@/utils/formatters'

const INITIAL_STATE: IProfile = {
    id: '',
    name: '',
    dateOfBirth: new Date(1990, 0, 1),
    phone: ''
}

export const useProfileForm = (initState?: IProfile) => {
    const [data, setData] = useState<IProfile>(initState ? initState : INITIAL_STATE)

    const isValid = () => {
        return data.name.length > 0 &&
          data.dateOfBirth &&
          isValidPhoneNumber(data.phone)
    }

    const getValidationError = () => {
        if (data.name.length === 0) {
            return 'error.empty'
        }

        const phoneError = getPhoneValidationError(data.phone)
        if (phoneError) {
            return phoneError
        }

        return null
    }

    const handleChange = useCallback((value: string, field: string) => {
        let formattedValue = value

        if (field === 'phone') {
            formattedValue = formatSimplePhoneNumber(value)
        }

        setData(prev => ({...prev, [field]: formattedValue}))
    }, [])

    const clearForm = () => setData(INITIAL_STATE)

    return {data, handleChange, isValid, clearForm, getValidationError}
}
