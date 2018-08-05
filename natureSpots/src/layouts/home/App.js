/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import My_list from '../../components/lista/list';
import My_map from '../../components/gmap/map'
import Tela_map from '../tela_maps/tela_maps'
import { createStackNavigator } from 'react-navigation';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component{
  onPress(){
    this.props.navigation.navigate('Tela_map');
  }
  render() {
    return (
      <View style={styles.container}>
      <Button
          title="Go to Details"
          onPress={() => this.onPress()}
        />
        <My_list  onPress={()=>this.onPress()}/>
        <My_map/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App