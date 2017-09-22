import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView ,StatusBar,TouchableOpacity,ListView} from 'react-native';
var MENU = [
	{name:'Tin Tức'},
	{name:'Hỏi đáp'},
	{name:'Nhật kí'}
]

class Home extends Component{
	constructor(props){
		super(props);
		
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(MENU),
    hidden: true

	}
	this._pushView = this._pushView.bind(this);
	this.taoHang = this.taoHang.bind(this);
}
taoHang(property){
	return(
		<TouchableOpacity style={styles.hang}
		 onPress={()=>this._pushView(property.name)}>
		<View style={styles.hang}>
			<Text style={style.text}>{property.name}</Text>
		</View>
		</TouchableOpacity>
	);
}
_pushView(menuName){
	
	// if(memuName == "Tin Tức"){
	// 	this.props.navigator.push({
	// 		name:'components',
	// 		component: require('./TinTuc'),
	// 		props:{title: menuName}
	// 	})
	// }
	// if(memuName == "Hỏi đáp"){
	// 	this.props.navigator.push({
	// 		name:'components',
	// 		component: require('./HoiDap'),
	// 		props:{title: menuName}
	// 	})
	// }
	// if(memuName == "Nhật kí"){
	// 	this.props.navigator.push({
	// 		name:'components',
	// 		component: require('./NhatKi'),
	// 		props:{title: menuName}
	// 	})
	// }

}

render (){
	return(
		<View style={styles.container}>
		<StatusBar hidden={this.state.hidden}/>
		<View style={styles.danhsach}>
		
		<ListView dataSource={this.state.dataSource}
		renderRow={this.taoHang}/>
		</View>
		</View>

		);
}
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  headerText: {
    
    color: 'white',
    fontSize: 20,
    fontWeight:'400'
  },
  danhsach:{
  	flex:10,
  	backgroundColor: 'white'
  },
  hang:{
  	flexDirection: 'row' ,
  	flex:1,
  	padding: 10,
  	borderWidth: 1,
  	borderColor: 'green'
  },
  title:{
  	flex: 1,
  	justifyContent:  'center' ,
  	alignItems:  'center'

  },
  text:{
  	fontSize: 18,
  	fontWeight: '300' 
  }
 
 
})
module.export=Home;