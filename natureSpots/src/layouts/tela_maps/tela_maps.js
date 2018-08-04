import {StyleSheet, Text, View, FlatList, Image, Alert, TouchableOpacity } from 'react-native';
import React, {Component} from 'react';
import Mapa from '../../components/mapa/mapa.js';


const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });
   

export default class Tela_maps extends Component{
    render(){
        return(
            <View>
                <Mapa/>
            </View>
        );
    }
}