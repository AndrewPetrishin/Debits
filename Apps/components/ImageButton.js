import React, { Component } from 'react';
import { TouchableOpacity, Image, Text , View} from 'react-native';

const toDisplay = (src, text) => {
    var {imageMin, imageMax, button} = styles;     
    return (
        <View style={button}>
            <Image
                style={isTextNotNull(text)?imageMin:imageMax}
                source={src}
            />
            {displayText(text)}
        </View>
    );
}

const isTextNotNull = (text) => {
    return text != undefined && text != null && text != '';
}

const displayText = (text) =>{
    if(isTextNotNull){
        return <Text>{text}</Text>;
    }    
}

const ImageButton = ({src, imageStyle, text, onPressButton}) => {
    return (
        <TouchableOpacity onPress={onPressButton}>
             {toDisplay(src, text)}
        </TouchableOpacity>
    );
};

const styles = {
    button:{
        flexDirection: 'column', 
        justifyContent:'center', 
        alignItems:'center'
    },
    imageMax :{
        width: 80,
        height:80
    },
    imageMin :{
        width: 50,
        height:50
    }
}

export { ImageButton };