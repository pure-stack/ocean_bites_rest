import LogoImage from '@/assets/images/logo.png'
import ProfileDetails from '@/components/profile/ProfileDetails'
import Button from '@/components/ui/Buttons/ButtonCommon'
import Text from '@/components/ui/Text'
import { Colors } from '@/constants/Colors'
import {
	IS_ONBOARDING_PASSED,
	IS_ONBOARDING_SKIPPED,
	USER,
} from '@/constants/localstorage'
import { ROUTES } from '@/constants/routes'
import { useProfileForm } from '@/hooks/useProfileForm'
import { addItem, setItem } from '@/utils/AsyncStorage'
import { getRandomId } from '@/utils/getRandomId'
import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Onboarding = () => {
	const [activeStep, setActiveStep] = useState<number>(0)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState('')

	const { data, handleChange, isValid, getValidationError } = useProfileForm()
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
		await addItem(
			USER,
			{
				...data,
				id: getRandomId(),
			},
			() => {}
		)
		router.replace(ROUTES.MENU)
	}

	const handleSkip = async () => {
		await setItem(IS_ONBOARDING_PASSED, true)
		await setItem(IS_ONBOARDING_SKIPPED, true)
		await addItem(
			USER,
			{
				id: getRandomId(),
				name: '',
				phone: '',
			},
			() => {}
		)
		router.replace(ROUTES.MENU)
	}

	if (activeStep) {
		return (
			<View
				style={{
					...styles.container,
					paddingTop: insets.top + 40,
					paddingBottom: insets.bottom + 40,
				}}
			>
				<Text text={'onboarding.details'} type={'title2'} />
				<ProfileDetails data={data} handleChange={handleChange} isEdit />
				{error && <Text text={error} textColor={Colors.light.error} />}
				<View
					style={{
						height: 50,
						width: '100%',
						marginTop: 'auto',
					}}
				>
					<Button
						onPress={handleClick}
						title={'button.continue'}
						bgColor={Colors.light.primary}
					/>
				</View>
			</View>
		)
	}

	return (
		<View
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				width: '100%',
				height: '100%',
			}}
		>
			{isLoading ? (
				<View
					style={{
						borderRadius: 18,
						overflow: 'hidden',
					}}
				>
					<Image source={LogoImage} style={{ width: 124, height: 124 }} />
				</View>
			) : (
				<View
					style={{
						...styles.container,
						paddingTop: insets.top + 40,
						paddingBottom: insets.bottom + 40,
					}}
				>
					<View style={styles.main}>
						<Image
							source={LogoImage}
							style={{
								height: 124,
								width: 124,
							}}
						/>
						<Text
							text={'onboarding.title'}
							styles={{
								fontWeight: '700',
								lineHeight: 33,
								fontSize: 24,
							}}
						/>
					</View>
					<View
						style={{
							width: '100%',
							marginTop: 'auto',
							gap: 16,
						}}
					>
						<View style={{ height: 50 }}>
							<Button
								onPress={handleClick}
								title={activeStep ? 'button.continue' : 'button.contPh'}
								bgColor={Colors.light.primary}
							/>
						</View>
						<View style={{ height: 50 }}>
							<Button
								onPress={handleSkip}
								title={'button.skip'}
								bgColor={Colors.dark.primary}
							/>
						</View>
					</View>
				</View>
			)}
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
		width: '100%',
	},
	main: {
		marginTop: 'auto',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: 30,
	},
})
