import PageWithHeader from '@/components/PageWithHeader'
import ProfileDetails from '@/components/profile/ProfileDetails'
import Text from '@/components/ui/Text'
import { Colors } from '@/constants/Colors'
import { IS_ONBOARDING_PASSED, USER } from '@/constants/localstorage'
import { ROUTES } from '@/constants/routes'
import { useProfileForm } from '@/hooks/useProfileForm'
import { IProfile } from '@/types/profile'
import { removeItem, updateItem } from '@/utils/AsyncStorage'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { router } from 'expo-router'
import { useState } from 'react'
import { View } from 'react-native'
import ButtonCommon from '../ui/Buttons/ButtonCommon'

interface IEditProfileDetailsProps {
    profile: IProfile;
    handleCancelEdit: () => void;
    refresh: () => void;
}

const EditProfileDetails = (props: IEditProfileDetailsProps) => {
    const {profile, handleCancelEdit, refresh} = props
    const {data, handleChange, isValid, getValidationError} = useProfileForm(profile as IProfile)
    const [error, setError] = useState('')

    const handleSaveProfile = async () => {
        if (!isValid()) {
            const errorMessage = getValidationError()
            setError(errorMessage || 'error.correct')
            return
        }
        setError('')
        await updateItem<IProfile>(USER, data, refresh)
        handleCancelEdit()
    }

    const deleteProfile = async () => {
        await removeItem<IProfile>(USER, profile.id, refresh)
        await AsyncStorage.removeItem(IS_ONBOARDING_PASSED)
        router.replace(ROUTES.ONBOARDING)
    }

    return (
      <PageWithHeader title={'navbar.profile'} leftBtnText={'button.back'} rightBtnText={'button.save'}
                      onPressLeftBtn={handleCancelEdit} onPressRightBtn={handleSaveProfile}>
          <ProfileDetails data={data} handleChange={handleChange} isEdit={true}/>
          {error && <Text text={error} textColor={Colors.light.error} styles={{
              margin: 'auto'
          }}/>}

          <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 6
          }}>
              <ButtonCommon title={'button.delete'} bgColor={Colors.light.error} onPress={() => deleteProfile()}/>
          </View>
      </PageWithHeader>
    )
}

export default EditProfileDetails
