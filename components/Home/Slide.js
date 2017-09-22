import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    Dimensions, StyleSheet,ScrollView
} from 'react-native';

import Swiper from 'react-native-swiper';

const {width, height} = Dimensions.get('window')


const imageWidth = width ;
const imageHeight = (imageWidth / 852) * 315;
const imageHeighthinhsu = (90 / 633) * 929;
const styles = StyleSheet.create({
    wrapper: {
        
        height: height*0.23,
    backgroundColor:'white'
    },
    textStyle: {

        fontSize: 15,
        color: 'black',
        paddingTop:10,
       paddingLeft: 5,
    },
    imageStyle: {
        height: imageHeight, 
        width: imageWidth

    },
    item: {
      flexDirection: 'row',
      
      padding: 0,
      margin: 1,
      
      
      backgroundColor: '#EEEEEE'
   },
   sizeICON: {
        height: imageHeighthinhsu, 
        width: 100,
        margin:5

    },

});

export default class Slide extends Component {
   
    render(){
        const { wrapper, textStyle, imageStyle,item ,sizeICON} = styles;
        return (
        


      <ScrollView horizontal={false}  >
      
        <View style={wrapper}>

           <Swiper style={styles.wrapper} height={800} vertical={false} autoplay>
                <Image source={require('../../Images/1.png')} style={imageStyle} />
                <Image source={require('../../Images/2.png')} style={imageStyle}/>
                <Image source={require('../../Images/3.jpg')} style={imageStyle}/>
            </Swiper>

        </View>
                <Text style={styles.textStyle}>LUẬT MỚI CẬP NHÂT</Text>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={item} >
               
              
              <Image source={require('../../Images/luathinhsu.png')} style={sizeICON} />
                <Image source={require('../../Images/2.png')} style={sizeICON}/>
                <Image source={require('../../Images/3.jpg')} style={sizeICON}/>
              
            </ScrollView>
            <Text style={styles.textStyle}>NÊN ĐỌC</Text>

             <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={item} >
             
              <Image source={require('../../Images/1.png')} style={sizeICON} />
                <Image source={require('../../Images/luatthuongmai.jpg')} style={sizeICON}/>
                <Image source={require('../../Images/3.jpg')} style={sizeICON}/>


              
            </ScrollView>

            <Text style={styles.textStyle}>CHỦ ĐỀ</Text>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={item} >
               
              
              <Image source={require('../../Images/luathinhsu.png')} style={sizeICON} />
                <Image source={require('../../Images/2.png')} style={sizeICON}/>
                <Image source={require('../../Images/3.jpg')} style={sizeICON}/>
                <Image source={require('../../Images/luathinhsu.png')} style={sizeICON} />
                <Image source={require('../../Images/2.png')} style={sizeICON}/>
                <Image source={require('../../Images/3.jpg')} style={sizeICON}/>
              
            </ScrollView>
           
        </ScrollView>
       
        );
    }
}