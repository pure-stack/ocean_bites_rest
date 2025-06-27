import DatePickerCustom from '@/components/ui/DatePickerCustom'
import TextInputWithTitle from '@/components/ui/Inputs/TextInputWithTitle'
import { IProfile } from '@/types/profile'
import React from 'react'
import { ScrollView } from 'react-native'

interface IProfileDetailsProps {
	data?: IProfile
	handleChange: (value: string, field: string) => void
	isEdit?: boolean
}

const ProfileDetails = (props: IProfileDetailsProps) => {
	const { data, handleChange, isEdit = false } = props

	const profileData = data || {
		name: '',
		phone: '',
		dateOfBirth: new Date(),
	}

	return (
		<ScrollView
			contentContainerStyle={{
				display: 'flex',
				flexDirection: 'column',
				gap: 24,
			}}
			style={{
				width: '100%',
				marginTop: 40,
			}}
		>
			<TextInputWithTitle
				editable={isEdit}
				value={profileData.name}
				onChange={value => handleChange(value, 'name')}
				text={'field.name'}
				placeholder={'placeholder.name'}
			/>
			<TextInputWithTitle
				editable={isEdit}
				value={profileData.phone}
				onChange={value => handleChange(value, 'phone')}
				text={'field.phone'}
				keyboardType={'number-pad'}
				placeholder={'placeholder.phone'}
			/>
		</ScrollView>
	)
}

export default ProfileDetails
