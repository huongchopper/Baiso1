import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView ,ListView} from 'react-native';

export default class Linhvuc extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 2',
       'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2'
       , 'row 2', 'row 2', 'row 2'
       , 'row 2', 'row 2', 'row 2'
       , 'row 2', 'row 2', 'row 2'
       , 'row 2', 'row 2', 'row 2']),
    };
  }

  render() {
    return (
        <View>
      <Text style={{fontSize: 15,
        color: 'black',
        paddingTop:10,
       paddingLeft: 5}}>LĨNH VỰC</Text>
       
      <ListView horizontal={true} showsHorizontalScrollIndicator={false}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
        
      /></View>
    );
  }
}