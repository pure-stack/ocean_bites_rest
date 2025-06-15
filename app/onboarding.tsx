import {StyleSheet, View} from 'react-native'
import {useEffect, useState} from 'react'
import {Image} from 'expo-image'
import Button from '@/components/ui/Buttons/ButtonCommon'
import {setItem} from '@/utils/AsyncStorage'
import {IS_ONBOARDING_PASSED, USER} from '@/constants/localstorage'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import Text from '@/components/ui/Text'
import LogoImage from '@/assets/images/logo.png'
import {Colors} from '@/constants/Colors'
import {useRouter} from 'expo-router'
import ProfileDetails from '@/components/profile/ProfileDetails'
import {useProfileForm} from '@/hooks/useProfileForm'
import {getRandomId} from '@/utils/getRandomId'
import {ROUTES} from '@/constants/routes'


const Onboarding = () => {
    const [activeStep, setActiveStep] = useState<number>(0)
    const [isLoading, setIsLoading] =
      useState(true)
    const [error, setError] = useState('')

    const {data, handleChange, isValid, getValidationError} = useProfileForm()
    const router = useRouter()
    const insets = useSafeAreaInsets()

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 3000)

        return () => {
            clearTimeout(timer)
        }
    }, [])

    const handleClick = async () => {
        if (!activeStep) {
            setActiveStep(1)
            return
        }
        if (!isValid()) {
            const errorMessage = getValidationError()
            setError(errorMessage || 'error.correct')
            return
        }
        setError('')
        await setItem(IS_ONBOARDING_PASSED, true)
        await setItem(USER, {
            ...data,
            id: getRandomId()
        })
        // @ts-ignore
        router.replace(ROUTES.MENU)
    }

    if (activeStep) {
        return <View style={{
            ...styles.container, paddingTop: insets.top + 40,
            paddingBottom: insets.bottom + 40
        }}>
            <Text text={'onboarding.details'} type={'title2'}/>
            <ProfileDetails data={data} handleChange={handleChange}/>
            {error && <Text text={error} textColor={Colors.light.error}/>}
            <View style={{
                height: 50,
                width: '100%',
                marginTop: 'auto'
            }}>
                <Button onPress={handleClick} title={'button.continue'}
                        bgColor={Colors.light.primary}/>
            </View>
        </View>
    }

    return (
      <View style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%'
      }}>
          {isLoading ? <View style={{
                borderRadius: 18,
                overflow: 'hidden'
            }}>
                <Image
                  source={LogoImage}
                  style={{width: 124, height: 124}}
                />
            </View>
            :
            <View style={{
                ...styles.container, paddingTop: insets.top + 40,
                paddingBottom: insets.bottom + 40
            }}>
                <View style={styles.main}>
                    <Image source={LogoImage} style={{
                        height: 124,
                        width: 124
                    }}/>
                    <Text text={'onboarding.title'} styles={{
                        fontWeight: '700',
                        lineHeight: 33,
                        fontSize: 24
                    }}/>
                </View>
                <View style={{
                    height: 50,
                    width: '100%',
                    marginTop: 'auto'
                }}>
                    <Button onPress={handleClick} title={activeStep ? 'button.continue' : 'button.contPh'}
                            bgColor={Colors.light.primary}/>
                </View>
            </View>}
      </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 16,
        height: '100%',
        width: '100%'
    },
    main: {
        marginTop: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 30
    }
})
