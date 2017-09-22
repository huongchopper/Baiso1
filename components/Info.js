import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';

import styles from './styles';

export default class Test extends Component{

  render() {
    return (
      <View style={styles.container}>
      <StatusBar hidden = {true} />
        <Text style={styles.welcome}>
          LAW BOOK
        </Text>

        <Text style={styles.instructions}>
          Sản phẩm của một sinh viên HLU.
        </Text>

        <Text style={styles.instructions} >
          
        </Text>

        <Text style={styles.botton}>
          Phiên bản 1.0
        </Text>
      </View>
    );
  }
}

