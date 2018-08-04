import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, FlatList, Image, Alert, TouchableOpacity } from 'react-native';
import Maper from '../../layouts/tela_maps/tela_maps';
import HomeScreen from '../../layouts/home/App';
import { createStackNavigator } from 'react-navigation';


export default class App extends Component {
  render() {

    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {id: 1, name: 'Vinicius Cardoso', course: 'Engenharia de Software', photo: 'https://cdn1.iconfinder.com/data/icons/occupations-3/100/21-512.png', bio: 'Professor de Engenharia de Software'},
            {id: 2, name: 'Carla Silva', course: 'Sistemas de Informação', photo: 'https://cdn3.iconfinder.com/data/icons/education-5-2/256/Teacher-512.png', bio: 'Professor de Engenharia de Software'}
          ]}
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