import {Platform} from 'react-native'
import {getLocales} from 'expo-localization'

export const getIOSSystemLanguage = () => {
    if (Platform.OS === 'ios') {
        return getLocales()[0].languageCode || 'en'
    }
    return 'en'
}
