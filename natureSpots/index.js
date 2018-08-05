/** @format */

import {AppRegistry} from 'react-native';
import App from './src/layouts/home/App.js';
import {name as appName} from './app.json';
import {createStackNavigator} from 'react-navigation';
import Map from './src/layouts/tela_maps/tela_maps'
import Detail from './src/layouts/detail/detail'

const rotas = createStackNavigator(
    {
      Home: {screen: App},
      Map: {screen: Map},
      Detail: {screen: Detail}
      
    },
    {
      initialRouteName: 'Home',
    }
  );

AppRegistry.registerComponent(appName, () => rotas);
