import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import {StatusBar} from './';

const RenderImage = (thumbnail_image) => {
    if(thumbnail_image){
        var img = {uri : thumbnail_image}
        return  (
            <View style={styles.imageContainer}>
                <Image source={img} style={styles.imageStyle}/>
            </View>
    )}
}

const RenderExpiredDate = (date, isReturned, bgColor, isExpired) => {    
    let title = 'Expire date:';
    if(isReturned) title = 'Returned in ';
    if(isExpired) title = 'Expired date : ';    
    var dateStyle;
    if(isReturned || isExpired){
        dateStyle = Object.assign({}, styles.dateStyle, {       
            color : '#fff',
            backgroundColor : bgColor
        });
    }
    else{
        dateStyle = Object.assign({}, styles.dateStyle, {       
            color : '#000'
        });
    }    
    return (
        <Text style={dateStyle}>{title} {date}</Text>
    )
}

const IsDateExpired = (date) => {
    let myDate=new Date(date);
    let curDate = new Date();
    return myDate < curDate;
}

const Card = (props) => {
    const { mainContainer, imageStyle, dataContainer, priceContainer, priceStyle, textContainer, titleStyle, dateStyle } = styles;
    const {thumbnail_image, title, date, isReturned} = props.objData;
    const isExpired = IsDateExpired(date);
    let bgColor = '#00A6FF';
    if(isReturned) bgColor = '#13CE66';
    else{
        if(isExpired) bgColor = '#F95F62';
    }
    const marginLeft = thumbnail_image ? 10 : 30;
    return (
        <View style = {mainContainer}>
            <StatusBar bgColor={bgColor} marginRight={marginLeft}/>          
            {RenderImage(thumbnail_image)}
            <View style={textContainer}>
                <Text style={titleStyle}>{title}</Text>
                {RenderExpiredDate(date, isReturned, bgColor, isExpired)}
            </View>  
            <View style={priceContainer}>
                <Text style={priceStyle}>{props.totalPrice}</Text>
            </View>                    
        </View>
    );
};

const styles = {
    mainContainer:{
        paddingRight: 20,
        height : 70,
        flexDirection: 'row',
        justifyContent : 'flex-start',
        alignItems : 'flex-start',
        marginBottom : 10
    },
    dataContainer:{
        flexDirection: 'row',  
        justifyContent : 'flex-start',
        alignSelf: 'center'   
    },
    imageStyle:{
        width : 60,
        height : 60,
        marginRight: 10, 
        borderRadius: 60
    },
    imageContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'  
    },
    textContainer:{
        justifyContent: 'flex-start',
        alignSelf:'center'
    },
    titleStyle:{
        fontSize : 20,
        fontWeight:  'bold',
        color : '#000'
    },
    dateStyle:{
        fontSize : 14,        
        fontWeight:  'bold',
        padding: 3
    },
    priceContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignSelf: 'center'
    },
    priceStyle:{
        fontSize: 20,
        fontWeight: 'bold'
    }
};

export { Card };