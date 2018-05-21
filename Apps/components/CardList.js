import React, { Component } from 'react';
import { View } from 'react-native';

const CardList = (props) => {
    const { mainContainer } = styles;
    
    return (
        <View style = {mainContainer}>
          {props.children}
        </View>
    );
};

const styles = {
    mainContainer:{
        flex : 1
    }
};

export { CardList };