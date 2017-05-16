import React, { Component } from 'react';

import {
    NavigatorIOS,
    View,
    Text,
    StyleSheet,
    StatusBar,
  } from 'react-native';

import VideoList from './video_list'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <NavigatorIOS
          style={styles.container}
          translucent={false}
          barTintColor='#5ED1F7'
          titleTextColor='white'
          tintColor='white'
          initialRoute={{
            title: 'Featured Videos',
            component: VideoList,
          }}
        />
      </View>
    );
  }
}

module.exports = Search;
