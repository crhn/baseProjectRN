import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../Containers/homeScreen';
import ProfileScreen from '../Containers/profileScreen';

const RootStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Profile: {
            screen: ProfileScreen,
        },
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#df0c36',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    },
);

const AppContainer = createAppContainer(RootStack);

const App = () => <AppContainer />;

export default App;
