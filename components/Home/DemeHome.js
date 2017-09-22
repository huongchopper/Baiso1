import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView ,ListView} from 'react-native';

export default class DemeHome extends Component {
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
      <ListView horizontal={true} showsHorizontalScrollIndicator={false}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
    );
  }
}