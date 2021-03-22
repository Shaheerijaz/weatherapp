import * as React from 'react';
import {Appbar, Title} from 'react-native-paper';
import Header from './Header';
import {View, Text, StyleSheet} from 'react-native';

const Search = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Search Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Search;
