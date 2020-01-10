import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize'
import en from './en';
import uk from './uk';

const languageDetector = {
    type: 'languageDetector',
    async: true,
    detect: async cb => {
        const { languageCode } = await RNLocalize.getLocales()[0]
        cb(languageCode)
    },
    init: () => { },
    cacheUserLanguage: () => { },
};


i18next
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'uk-UA',
        debug: true,
        resources: {
            en,
            uk
        },
    });