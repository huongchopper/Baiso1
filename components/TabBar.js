import React, { Component } from 'react';
import { Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home.js';
import Slide from './Home/Slide.js';
import Info from './Info';

export default class TabBar extends Component{
	constructor(props) {
    super(props);
    this.state= {selectedTab:'home'}
  }


	render() {
		return (
  
			<TabNavigator>

  <TabNavigator.Item
    selected={this.state.selectedTab === 'home'}
    title="Home"
   renderIcon={() => <Image source={ require ( "../Images/ich2.png")} style={{width:25 , height:25}}  />}
   renderSelectedIcon={() => <Image source={require( "../Images/ich1.png")} style={{width:25 , height:25}}/>}
    onPress={() => this.setState({ selectedTab: 'home' })}>
    <Slide />
  </TabNavigator.Item>

  <TabNavigator.Item
    selected={this.state.selectedTab === 'profile'}
    title="Profile"
    
    renderIcon={() => <Image source={require("../Images/law2.png")}
                              style={{width:22 , height:22}}  />}
    renderSelectedIcon={() => <Image source={require("../Images/law1.png")}style={{width:25 , height:25}} />}
    onPress={() => this.setState({ selectedTab: 'profile' })}>
<Home />
       
      
  </TabNavigator.Item>

<TabNavigator.Item
    selected={this.state.selectedTab === 'Info'}
    title="Thông tin"
    
    renderIcon={() => <Image source={require("../Images/ici2.png")} style={{width:22 , height:22}}  />}
    renderSelectedIcon={() => <Image source={require("../Images/ici1.png")} style={{width:25 , height:25}}/>}
    onPress={() => this.setState({ selectedTab: 'Info' })}>
<Info />
       
      
  </TabNavigator.Item>


</TabNavigator>
			
			);
	}
}