import PageWithHeader from '@/components/PageWithHeader'
import ProfileDetails from '@/components/profile/ProfileDetails'
import Text from '@/components/ui/Text'
import { Colors } from '@/constants/Colors'
import { USER } from '@/constants/localstorage'
import { useProfileForm } from '@/hooks/useProfileForm'
import { IProfile } from '@/types/profile'
import { addItem, removeItem, updateItem } from '@/utils/AsyncStorage'
import { getRandomId } from '@/utils/getRandomId'
import { useState } from 'react'
import { View } from 'react-native'
import ButtonCommon from '../ui/Buttons/ButtonCommon'

interface IEditProfileDetailsProps {
	profile: IProfile
	handleCancelEdit: () => void
	refresh: () => void
}

const EditProfileDetails = (props: IEditProfileDetailsProps) => {
	const { profile, handleCancelEdit, refresh } = props
	const { data, handleChange, isValid, getValidationError } = useProfileForm(
		profile as IProfile
	)
	const [error, setError] = useState('')

	const handleSaveProfile = async () => {
		if (!isValid()) {
			const errorMessage = getValidationError()
			setError(errorMessage || 'error.correct')
			return
		}
		setError('')

		if (profile.id) {
			await updateItem<IProfile>(USER, data, refresh)
		} else {
			const newProfile = { ...data, id: getRandomId() }
			await addItem<IProfile>(USER, newProfile, refresh)
		}
		handleCancelEdit()
	}

	const deleteProfile = async () => {
		if (profile.id) {
			await removeItem<IProfile>(USER, profile.id, refresh)
			handleCancelEdit()
		}
	}

	const showDeleteButton = profile.id && profile.id.trim() !== ''

	return (
		<PageWithHeader
			title={'navbar.profile'}
			leftBtnText={'button.back'}
			rightBtnText={'button.save'}
			onPressLeftBtn={handleCancelEdit}
			onPressRightBtn={handleSaveProfile}
		>
			<ProfileDetails data={data} handleChange={handleChange} isEdit={true} />
			{error && (
				<Text
					text={error}
					textColor={Colors.light.error}
					styles={{
						margin: 'auto',
					}}
				/>
			)}

			{showDeleteButton && (
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						gap: 6,
					}}
				>
					<ButtonCommon
						title={'button.delete'}
						bgColor={Colors.light.error}
						onPress={() => deleteProfile()}
					/>
				</View>
			)}
		</PageWithHeader>
	)
}

export default EditProfileDetails
