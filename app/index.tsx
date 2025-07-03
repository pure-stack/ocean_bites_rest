import {getItem} from '@/utils/AsyncStorage'
import {IS_ONBOARDING_PASSED} from '@/constants/localstorage'
import React, {useEffect, useState} from 'react'
import {Redirect} from 'expo-router'
import LoaderPage from '@/components/ui/LoaderPage'
import {ROUTES} from '@/constants/routes'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Index = () => {
    const [redirect, setRedirect] = useState<string | null>(null)

    useEffect(() => {
        const checkOnboarding = async () => {
            const isOnboardingPassed = await getItem(IS_ONBOARDING_PASSED)

            if (isOnboardingPassed) {
                setRedirect(ROUTES.MENU)
            } else {
                setRedirect(ROUTES.ONBOARDING)
            }
        }

        checkOnboarding()
    }, [])

    if (redirect) {
        return <Redirect href={redirect}/>
    }

    return <LoaderPage/>
}

export default Index

