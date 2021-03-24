import React, {useState} from 'react';
import {TextInput, Button} from 'react-native-paper';
import Header from './Header';
import getweather from './Home';
import {View, Text, StyleSheet} from 'react-native';

const Search = ({navigation}) => {
  const [city, setCity] = useState('');

  const btnClick = () => {
    navigation.navigate('home', {city: city});
  };
  const listClick = cityName => {
    setCity(cityName);
    navigation.navigate('home', {city: cityName});
  };

  return (
    <View style={styles.container}>
      <Header name="Search Screen" />
      <TextInput
        label="City Name"
        value={city}
        onChangeText={text => setCity(text)}
        // onSubmitEditing={() => {
        //   getweather;
        // }}
      />
      <Button
        icon="content-save"
        mode="contained"
        style={styles.button}
        onPress={() => btnClick()}>
        <Text style={styles.theme}>Search</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  theme: {
    color: '#00aaff',
  },
  button: {
    color: '#00aaff',
    margin: '5%',
  },
});

export default Search;
