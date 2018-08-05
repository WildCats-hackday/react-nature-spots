/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {ActivityIndicator, FlatList, TouchableOpacity, Image, Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';
import My_list from '../../components/lista/list';
import My_map from '../../components/gmap/map'
import Map from '../tela_maps/tela_maps'
import PropTypes from 'prop-types';

class App extends Component{
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
    this.go_detail = this.go_detail.bind(this);
  }
  go_detail = (item) => {
    const {navigate} = this.props.navigation
      navigate('Detail',{id:1})
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

  goDetail = (item) => {
    this.props.navigation.navigate('Detail',{id: item.id})
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
      <Button
          onPress={() => this.onPress()}
          title="Button"
        />
        <FlatList 
          data={this.state.dataSource}
          renderItem={
            ({item}) => 
            <TouchableOpacity onPress={()=> this.goDetail(item)}>  
              <View style={styles.itemView}>
                <Image source={{ uri: item.photo}} style={styles.photo}/>
                <Text style={styles.itemList}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          }
        >
        </FlatList>
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

export default App