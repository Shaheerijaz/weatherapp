import * as React from 'react';
import {Appbar, Title} from 'react-native-paper';
import {StyleSheet} from 'react-native';

const Header = props => {
  return (
    <Appbar.Header style={styles.theme}>
      <Title style={styles.title}>{props.name}</Title>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  theme: {
    color: '#00aaff',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
  },
});

export default Header;
