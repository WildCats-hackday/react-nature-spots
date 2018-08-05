import React, { Component } from 'react';
 
import { ActivityIndicator, StyleSheet, Platform, View, Text } from 'react-native';
import PropTypes from 'prop-types';


export default class Detail extends Component{
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
      }
    
      componentDidMount(){
        return fetch('https://nature-spots.herokuapp.com/places/'+this.props.navigation.getParam('id','NO-ID')+'.json')
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
    render(){
        if(this.state.isLoading){
            return(
              <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
              </View>
            )
          }
      
        const { navigation } = this.props;
        const item_id = navigation.getParam('id','NO-ID')
        return(
            <Text>
                {console.log(this.state.dataSource)}
            </Text>
        )
    }
}
