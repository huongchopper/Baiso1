import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView ,ListView} from 'react-native';

export default class Lawnew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    }
  }
  
  render() {
    return (
      <View>
      <Text style={{fontSize: 15,
        color: 'black',
        paddingTop:10,
       paddingLeft: 5}}>LUẬT MỚI CẬP NHaT</Text>



      <ListView horizontal={true} showsHorizontalScrollIndicator={false}
        dataSource={this.state.dataSource}
        renderRow={(row) => 

          <Image source = {{uri:row.Hinh}} />
          <Text>{row.Ten}</Text>}
      />
      </View>
    );
  }
}

componentDidMount(){
    // var mang=["1","2","44444"]
    fetch (" http://192.168.0.102/Webservice01/vd1.php")
    .then((response)=>response.json())
    .then((responseJson)=>{
      console.log(responseJson);
      this.setState({
  dataSource:this.state.dataSource.cloneWithRows(responseJson),
});
