import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import LogoTitle from '../Components/logoTitle';
import i18n from '../i18n';

const styles = StyleSheet.create({
    homeScreenView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerRightButton: {
        color: '#000000',
    },
});

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        headerTitle: <LogoTitle />,
        headerRight: (
            <Button
                onPress={() => alert(i18n.t('alertButton'))}
                title={i18n.t('info')}
                style={styles.headerRightButton}
            />
        ),
    };

    render() {
        return (
            <View style={styles.homeScreenView}>
                <Text>{i18n.t('homeScreen')}</Text>
                <Text>{i18n.t('current', { language: '!' })}</Text>
                <Button
                    title={i18n.t('goToProfile')}
                    onPress={() => {
                        this.props.navigation.navigate('Profile', {
                            itemId: 86,
                            otherParam: i18n.t('firstDetails'),
                        });
                    }}
                />
            </View>
        );
    }
}
