import React from 'react';
import { Button, Text, View } from 'react-native';
import LogoTitle from '../Components/logoTitle';

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
