import {
    createStackNavigator,
  } from 'react-navigation';
import Home from '../layouts/home/App';
import Map from '../layouts/tela_maps/tela_maps'
import Detail from '../layouts/detail/detail'
const App = createStackNavigator(
  {
    Home: {screen: Home},
    Map: {screen: Map},
    Detail: {screen: Detail},
  },
  {
    initialRouteName: 'Home',
  }
);

  export default App