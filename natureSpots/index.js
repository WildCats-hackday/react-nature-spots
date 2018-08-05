/** @format */

import {AppRegistry} from 'react-native';
import App from './src/layouts/home/App.js';
import {name as appName} from './app.json';
import {StackNavigator} from 'react-navigation';
import Tela_map from './src/layouts/tela_maps/tela_maps'
import Detail from './src/layouts/detail/detail'

const rotas = StackNavigator(
    {
      Home: App,
      Tela_map: Tela_map,
      Detail: Detail,
    },
    {
      initialRouteName: 'Home',
    }
  );

AppRegistry.registerComponent(appName, () => rotas);
