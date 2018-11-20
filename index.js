/** @format */

import {AppRegistry} from 'react-native';
import AppNavigator from './App/Navigation/rootStack';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigator);
