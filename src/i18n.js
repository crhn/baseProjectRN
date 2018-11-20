import ReactNativeLanguages from 'react-native-languages';
import i18n from 'i18next';

import en from './Translations/en.json';
import fr from './Translations/fr.json';

export default i18n.init({
    debug: true,
    lng: ReactNativeLanguages.language,
    fallbackLng: 'en',
    resources: { en, fr },
});
