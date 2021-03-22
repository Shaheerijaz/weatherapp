import * as React from 'react';
import {Appbar, Title} from 'react-native-paper';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <Appbar.Header style={styles.theme}>
      <Title>Weather App</Title>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  theme: {
    color: '#00aaff',
  },
});

export default Header;
