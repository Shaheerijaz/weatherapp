import React, {useState} from 'react';
import {TextInput, Button} from 'react-native-paper';
import Header from './Header';
import {View, Text, StyleSheet} from 'react-native';

const Search = () => {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState('');
  const fetchCities = text => {
    setCity(text);
    fetch('http://autocomplete.wunderground.com/aq?query=' + text)
      .then(item => item.json())
      .then(cityData => {
        console.log(cityData);
      });
  };

  return (
    <View style={styles.container}>
      <Header name="Search Screen" />
      <TextInput
        label="City Name"
        value={city}
        onChangeText={text => fetchCities(text)}
      />
      <Button
        icon="content-save"
        mode="contained"
        style={styles.button}
        onPress={() => console.log('Pressed')}>
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
