import AddEditReservation from '@/components/reservation/AddEditReservation'
import ReservationConfirmed from '@/components/reservation/ReservationConfirmed'
import ReservationSummary from '@/components/reservation/ReservationSummary'
import { RESERVATIONS } from '@/constants/localstorage'
import { usePromiseState } from '@/hooks/usePromiseState'
import { IReservation } from '@/types/reservation'
import { getItem } from '@/utils/AsyncStorage'
import { useState } from 'react'

export default function Reservation() {
    const {
        data: reservations,
        isLoading, 
        refresh
    } = usePromiseState<IReservation[]>(() => getItem(RESERVATIONS), [])

    const [currentStep, setCurrentStep] = useState<'form' | 'summary' | 'confirmed'>('form')
    const [savedReservation, setSavedReservation] = useState<IReservation | null>(null)

    const handleShowSummary = (reservation: IReservation) => {
        setSavedReservation(reservation)
        setCurrentStep('summary')
    }

    const handleContinueFromSummary = () => {
        setCurrentStep('confirmed')
    }

    const handleNewBooking = () => {
        setSavedReservation(null)
        setCurrentStep('form')
    }

    if (currentStep === 'confirmed' && savedReservation) {
        return (
            <ReservationConfirmed 
                reservation={savedReservation}
                onNewBooking={handleNewBooking}
            />
        )
    }

    if (currentStep === 'summary' && savedReservation) {
        return (
            <ReservationSummary 
                reservation={savedReservation}
                onContinue={handleContinueFromSummary}
            />
        )
    }

    return (
        <AddEditReservation 
            reservation={undefined} 
            handleClose={() => {}} 
            refresh={refresh}
            onSuccess={handleShowSummary}
        />
    )
}
