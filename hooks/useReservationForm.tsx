import { USER } from '@/constants/localstorage'
import { IProfile } from '@/types/profile'
import { IReservation } from '@/types/reservation'
import { getItem } from '@/utils/AsyncStorage'
import { formatSimplePhoneNumber, getPhoneValidationError, isValidPhoneNumber } from '@/utils/formatters'
import { useIsFocused } from '@react-navigation/native'
import { useCallback, useEffect, useState } from 'react'

const INITIAL_STATE: IReservation = {
    id: '',
    name: '',
    phone: '',
    dateTocome: new Date().toString(),
    timeTocome: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
    guests: 1,
    specialRequest: ''
}

export const useReservationForm = (initState?: IReservation) => {
    const [data, setData] = useState<IReservation>(initState ? initState : INITIAL_STATE)
    const [isProfileLoaded, setIsProfileLoaded] = useState(false)
    const isFocused = useIsFocused()

    useEffect(() => {
        const loadProfileData = async () => {
            try {
                const profile: IProfile[] = await getItem(USER)
                if (profile && profile.length > 0 && profile[0]) {
                    const userData = profile[0]
                    setData(prev => ({
                        ...prev,
                        name: userData.name || '',
                        phone: userData.phone || ''
                    }))
                }
                setIsProfileLoaded(true)
            } catch (error) {
                console.error('Error loading profile data:', error)
                setIsProfileLoaded(true)
            }
        }

        if (!initState && isFocused) {
            setIsProfileLoaded(false)
            loadProfileData()
        } else if (initState) {
            setIsProfileLoaded(true)
        }
    }, [initState, isFocused])

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

    return {data, handleChange, isValid, clearForm, getValidationError, isProfileLoaded}
} 