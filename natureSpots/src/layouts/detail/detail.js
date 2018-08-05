import React, { Component } from 'react';
 
import { StyleSheet, Platform, View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class User_detail extends Component{

    render(){
        return(
            <View/>
        )
    }
}

User.propTypes =
{
  name: PropTypes.string,
  FontSize: PropTypes.number,
  FontColor: PropTypes.string,
  
}