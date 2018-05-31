import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { ImageButton } from './';

const StatusBar = ({bgColor, marginRight}) => {
  
    const mainContainer = {
        width:7,
        alignSelf: 'stretch',
        backgroundColor:  bgColor,
        marginRight: marginRight,
    };

    return (
        <View style = {mainContainer}>                         
        </View>
    );
};

export { StatusBar };