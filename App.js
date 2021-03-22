/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Search from './screens/Search';

const App = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.carCotainer}>
        <Search />
        <View style={styles.titles}>
          <Text style={styles.title}>MODEL S</Text>
          <Text style={styles.subtitle}>Price Starting From $78,000</Text>
        </View>
      </View>
      <StatusBar syle="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carCotainer: {
    height: '100%',
    width: '100%',
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 13,
    color: '#5c5e62',
  },
});

export default App;
