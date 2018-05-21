import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

const Card = (props) => {
    const { mainContainer, image, imageContainer, dataContainer, priceContainer } = styles;
    var img = {uri : props.objData.thumbnail_image}
    return (
        <View style = {mainContainer}>
            <View style={imageContainer}>
                <Image source={img} style={image}/>
            </View>
            <View style={dataContainer}>
                <Text>{props.objData.title}</Text>
            </View>  
            <View style={priceContainer}>
                <Text>40</Text>
            </View>           
        </View>
    );
};

const styles = {
    mainContainer:{
        margin : 5,
        height : 60,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        flexDirection: 'row',
    },
    image:{
        width : 50,
        height : 50,
        paddingRight: 10,
        marginRight: 10,
    },
    imageContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    dataContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    priceContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    }
};

export { Card };