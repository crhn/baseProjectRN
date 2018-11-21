import React from 'react';
import { Button, Text, View } from 'react-native';
import i18n from '../i18n';

export default class ProfileScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            title: params ? params.otherParam : 'A Nested Details Screen',
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor,
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor,
        };
    };

    render() {
        const { params } = this.props.navigation.state;
        const itemId = params ? params.itemId : null;
        const otherParam = params ? params.otherParam : null;

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{i18n.t('profileScreen')}</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                <Button
                    title={i18n.t('updateTitle')}
                    onPress={() =>
                        this.props.navigation.setParams({ otherParam: i18n.t('updated') })
                    }
                />
                <Button
                    title={i18n.t('detailsAgain')}
                    onPress={() => this.props.navigation.navigate('Profile')}
                />
                <Button title={i18n.t('goBack')} onPress={() => this.props.navigation.goBack()} />
            </View>
        );
    }
}
