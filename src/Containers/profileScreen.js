import React from 'react';
import { Text, View } from 'react-native';
import CustomButton from '../Components/customButton';
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
                <CustomButton
                    onPressAction={() =>
                        this.props.navigation.setParams({ otherParam: i18n.t('updated') })
                    }
                    text={i18n.t('updateTitle')}
                />
                <CustomButton
                    onPressAction={() => this.props.navigation.navigate('Profile')}
                    text={i18n.t('detailsAgain')}
                />
                <CustomButton
                    onPressAction={() => this.props.navigation.goBack()}
                    text={i18n.t('goBack')}
                />
            </View>
        );
    }
}
