import React, { Component } from 'react';
 
import { StyleSheet, Platform, View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class Detail extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const { navigation } = this.props;
        const { item } = navigation.getParams('id', 'NO-ID')
        return(
            <View/>
        )
    }
}