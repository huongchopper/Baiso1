import React , { Component} from 'react';
import {View ,StatusBar, Text,ListView,ScrollView} from 'react-native';
import DemeHome from './DemeHome';

import Linhvuc from './Linhvuc';

import Slider from './Slider';
export default class Home extends Component{
	render (){
		return (

			<ScrollView style={{flex:1, backgroundColor: 'white'}}>
		<StatusBar hidden ={true}/>
			<Slider/>

			
			<Linhvuc/>


			</ScrollView>
			);
	}
} 