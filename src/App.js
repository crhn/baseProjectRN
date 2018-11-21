import React, { PureComponent } from 'react';
import ReactNativeLanguages from 'react-native-languages';
import i18n from './i18n';
import Navigation from './Navigation';

export default class App extends PureComponent {
    componentWillMount() {
        ReactNativeLanguages.addEventListener('change', this.onLanguagesChange);
    }

    componentWillUnmount() {
        ReactNativeLanguages.removeEventListener('change', this.onLanguagesChange);
    }

    onLanguagesChange = ({ language }) => {
        i18n.changeLanguage(language);
    };

    render() {
        return <Navigation />;
    }
}
