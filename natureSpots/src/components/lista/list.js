import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, Text, View, FlatList, Image, Alert, TouchableOpacity } from 'react-native';
import Maper from '../../layouts/tela_maps/tela_maps';
import HomeScreen from '../../layouts/home/App';
import { createStackNavigator } from 'react-navigation';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://nature-spots.herokuapp.com/places.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
  render() {

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={
            ({item}) => 
            <TouchableOpacity onPress={()=>{this.props.onPress()}}>  
              <View style={styles.itemView}>
                <Image source={{ uri: item.photo}} style={styles.photo}/>
                <Text style={styles.itemList}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          }
        >
        </FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  itemView: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemList: {
    padding: 10,
    fontSize: 18,
    height: 44,
    marginTop: 20,
    marginLeft: 12
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  }
});