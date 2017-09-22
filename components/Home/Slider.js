import React, { Component } from 'react';
import { Text, Image, View, Dimensions,StyleSheet, ScrollView ,ListView} from 'react-native';
import Swiper from 'react-native-swiper'; 

 const {width, height} = Dimensions.get('window')
const imageWidth = width ;
const imageHeight = (imageWidth / 852) * 315;

const styles = StyleSheet.create({
    wrapper: {
        
        height: height*0.23,
    backgroundColor:'red'
    },
 
    imageStyle: {
        height: imageHeight,
        width: imageWidth

    },
   
});





export default class Slider extends Component {





  render() {
    const { wrapper, imageStyle} = styles;
    return (
      <View style={wrapper}>

           <Swiper style={styles.wrapper} height={800} vertical={false} autoplay>
                <Image source={require('../../Images/1.png')} style={imageStyle} />
                <Image source={require('../../Images/2.png')} style={imageStyle}/>
                <Image source={require('../../Images/3.jpg')} style={imageStyle}/>
            </Swiper>

        </View>
    );
  }
}