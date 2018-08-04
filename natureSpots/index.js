/** @format */

import {AppRegistry} from 'react-native';
import App from './src/layouts/home/App.js';
import {name as appName} from './app.json';
import {createStackNavigator} from 'react-navigation';
import Tela_map from './src/layouts/tela_maps/tela_maps'

const rotas = createStackNavigator(
    {
      Home: App,
      Tela_map: Tela_map
    },
    {
      initialRouteName: 'Home',
    }
  );

AppRegistry.registerComponent(appName, () => rotas);
