import React, {useState, useEffect} from 'react';
import {TextInput, Button, Title, Card} from 'react-native-paper';
import Header from './Header';
import {View, Text, StyleSheet, Image} from 'react-native';

const API_key = '566445bb54564625884e2b5983e5375f';

const Home = () => {
  const [info, setInfo] = useState({
    city: 'loading..!!',
    temp: 'loading..!!',
    humidity: 'loading..!!',
    desc: 'loading..!!',
    icon: 'loading..!!',
  });
  //const icon = info.icon;
  useEffect(() => {
    getweather();
  }, []);
  const getweather = () => {
    fetch(`https://api.weatherbit.io/v2.0/current?&city=london&key=${API_key}`)
      .then(data => data.json())
      .then(results => {
        setInfo({
          city: results.data[0].city_name,
          temp: results.data[0].temp,
          humidity: results.data[0].rh,
          desc: results.data[0].weather.description,
          icon: results.data[0].weather.icon,
        });
        console.log(results.data[0].weather.icon);
      });
  };
  return (
    <View style={styles.container}>
      <Header name="Weather App" style={styles.container} />
      <View style={{alignItems: 'center'}}>
        <Title style={styles.city}>{info.city}</Title>
        <Image
          style={styles.icon}
          source={{
            uri:
              'https://www.weatherbit.io/static/img/icons/' +
              info.icon +
              '.png',
          }}
        />
      </View>
      <Card style={styles.card}>
        <Title style={styles.sub}> Temperature = {info.temp} </Title>
      </Card>

      <Card style={styles.card}>
        <Title style={styles.sub}> Humidity = {info.humidity} </Title>
      </Card>

      <Card style={styles.card}>
        <Title style={styles.sub}> Description = {info.desc} </Title>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  city: {
    color: '#00aaff',
    marginTop: 10,
    fontSize: 30,
  },
  icon: {
    marginTop: 120,
    width: '20%',
    height: '20%',
  },
  card: {
    margin: 5,
    padding: 12,
  },
  sub: {
    color: '#00aaff',
  },
});

export default Home;
