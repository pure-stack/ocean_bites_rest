import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import en from './json/en.json'

import {LanguageCode} from './languageUtils'
import {getIOSSystemLanguage} from '@/utils/getIosSystemLanguage'

const resources = {
    en: {
        translation: en
    },
}

const initializeI18Next = () => {
    i18n.use(initReactI18next).init({
        debug: false,
        resources,
        lng: getIOSSystemLanguage(),
        fallbackLng: LanguageCode.en,
        compatibilityJSON: 'v4',
        interpolation: {
            escapeValue: false
        }
    })
}

export default {initializeI18Next}
