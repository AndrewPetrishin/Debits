import React, { Component } from 'react';
import { View,Text } from 'react-native';

const Header = (props) => {
    const { mainContainer } = styles;
    return (
        <View style = {styles.mainContainer}>
           <Text style= {styles.textStyle}>{ props.children }</Text>
        </View>
    );
};

const styles = {
    mainContainer:{
        // position: 'absolute',  
        // zIndex: 100,
        // top: 0,
        // left: 0,
        // right: 0,
        backgroundColor: '#00A6FF',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        // shadowColor: '#000',
        // shadowOffset: { width:3, height:14 },
        // shadowOpacity: 0.2,
        // elevation : 2,
        // position: 'relative'
    },
    textStyle:{
        fontSize: 34,
        color: '#fff'
    }
};

export { Header };