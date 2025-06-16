import {useProfileForm} from '@/hooks/useProfileForm'
import {IProfile} from '@/types/profile'
import PageWithHeader from '@/components/PageWithHeader'
import ProfileDetails from '@/components/profile/ProfileDetails'
import {updateItem} from '@/utils/AsyncStorage'
import {USER} from '@/constants/localstorage'
import {useState} from 'react'
import Text from '@/components/ui/Text'
import {Colors} from '@/constants/Colors'

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

    return (
      <PageWithHeader title={'navbar.profile'} leftBtnText={'button.back'} rightBtnText={'button.save'}
                      onPressLeftBtn={handleCancelEdit} onPressRightBtn={handleSaveProfile}>
          <ProfileDetails data={data} handleChange={handleChange} isEdit={true}/>
          {error && <Text text={error} textColor={Colors.light.error} styles={{
              margin: 'auto'
          }}/>}
      </PageWithHeader>
    )
}

export default EditProfileDetails
