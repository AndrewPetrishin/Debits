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
        backgroundColor: '#74b9ff',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        shadowColor: '#000',
        shadowOffset: { width:3, height:14 },
        //shadowOpacity: 0.2,
        // elevation : 2,
        // position: 'relative'
    },
    textStyle:{
        fontSize: 30,
        color: '#d63031'
    }
};

export { Header };