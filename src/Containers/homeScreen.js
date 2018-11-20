import React from 'react';
import { Button, Text, View } from 'react-native';
import LogoTitle from '../Components/logoTitle';
import i18n from '../i18n';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        headerTitle: <LogoTitle />,
        headerRight: (
            <Button onPress={() => alert('This is a button!')} title="Info" color="#fff" />
        ),
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Text>{i18n.t('current', { language: '!' })}</Text>
                <Button
                    title="Go to Details"
                    onPress={() => {
                        this.props.navigation.navigate('Profile', {
                            itemId: 86,
                            otherParam: 'First Details',
                        });
                    }}
                />
            </View>
        );
    }
}
