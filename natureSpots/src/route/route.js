import {
    createStackNavigator,
  } from 'react-navigation';
  
  const App = createStackNavigator({
    Home: { screen: HomeScreen },
    Map: { screen: Maper },
  });

  export default App