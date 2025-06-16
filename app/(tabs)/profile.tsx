import {Dimensions, Platform, StyleSheet} from 'react-native'
import PageWithHeader from '@/components/PageWithHeader'
import {usePromiseState} from '@/hooks/usePromiseState'
import {getItem} from '@/utils/AsyncStorage'
import {USER} from '@/constants/localstorage'
import LoaderPage from '@/components/ui/LoaderPage'
import {IProfile} from '@/types/profile'
import ProfileDetails from '@/components/profile/ProfileDetails'
import {useEffect, useState} from 'react'
import EditProfileDetails from '@/components/profile/EditProfileDetails'
import {useIsFocused} from '@react-navigation/native'

const screenWidth = Dimensions.get('window').width

function formatDatesCustom(dates: string[]): string[] {
    let lastMonth = ''
    return dates?.map(dateStr => {
        const date = new Date(dateStr)
        const month = date.toLocaleString('default', {month: 'short'}).slice(0, 3)
        const day = date.getDate().toString().padStart(2, '0')

        if (month !== lastMonth) {
            lastMonth = month
            return `${month} ${day}`
        }
        return day
    })
}

const parseDateForReactNative = (dateString: string) => {
    if (Platform.OS === 'ios') {
        return new Date(dateString.replace(' GMT', ''))
    }
    return new Date(dateString)
}


export default function TabTwoScreen() {
    const {
        data: profile,
        isLoading, refresh
    } = usePromiseState<IProfile[]>(() => getItem(USER), [])

    const [isEdit, setIsEdit] = useState(false)

    const handleStartEdit = () => {
        setIsEdit(true)
    }

    const handleCancelEdit = () => {
        setIsEdit(false)
    }

    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            setIsEdit(false)
        }
    }, [isFocused]);

    if (isLoading) {
        return <LoaderPage/>
    }

    if (isEdit) {
        return <EditProfileDetails profile={profile[0]}
                                   handleCancelEdit={handleCancelEdit} refresh={refresh}/>
    }

    return (
      <PageWithHeader title={'navbar.profile'} rightBtnText={'button.edit'} onPressRightBtn={handleStartEdit}>
          <ProfileDetails data={profile[0]} handleChange={() => {
          }} isEdit={false}/>
      </PageWithHeader>
    )
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute'
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8
    }
})
