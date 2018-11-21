import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../Components/customButton';
import LogoTitle from '../Components/logoTitle';
import i18n from '../i18n';

const styles = StyleSheet.create({
    homeScreenView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        headerTitle: <LogoTitle />,
        headerRight: (
            <CustomButton
                onPressAction={() => alert(i18n.t('alertButton'))}
                text={i18n.t('info')}
            />
        ),
    };

    render() {
        return (
            <View style={styles.homeScreenView}>
                <Text>{i18n.t('homeScreen')}</Text>
                <Text>{i18n.t('current', { language: '!' })}</Text>
                <CustomButton
                    onPressAction={() => {
                        this.props.navigation.navigate('Profile', {
                            itemId: 86,
                            otherParam: i18n.t('firstDetails'),
                        });
                    }}
                    text={i18n.t('goToProfile')}
                />
            </View>
        );
    }
}
