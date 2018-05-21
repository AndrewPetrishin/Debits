import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { ImageButton } from './';

const Footer = () => {
    const { mainContainer } = styles;
    var imageGive = require('../images/get.png');
    var imageTake = require('../images/take.png');
    var imageAdd = require('../images/add.png');
    
    return (
        <View style = {mainContainer}>
            <ImageButton src={imageGive} text='Give' onPressButton={() => alert('Give')}/>
            <ImageButton src={imageAdd} onPressButton={() => alert('Add')}/>
            <ImageButton src={imageTake}  text='Take' onPressButton={() => alert('take')}/>                       
        </View>
    );
};

const styles = {
    mainContainer:{
        backgroundColor: '#dfe6e9',        
        height: 90 , 
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
};

export { Footer };