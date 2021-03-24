import React, {useState, useEffect} from 'react';
import {TextInput, Button, Title, Card} from 'react-native-paper';
import Header from './Header';
import Search from './Search';
import {View, Text, StyleSheet, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const API_key = '9c653fe66d4643b2b05f717b2fabfd51';

const Home = props => {
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
  const getweather = async () => {
    let Mycity = await AsyncStorage.getItem('newcity');
    if (!Mycity) {
      const {city} = props.route.params;
      Mycity = city;
    }
    console.log(Mycity);

    fetch(
      `https://api.weatherbit.io/v2.0/current?&city=${Mycity}&key=${API_key}`,
    )
      .then(data => data.json())
      .then(results => {
        setInfo({
          city: results.data[0].city_name,
          temp: results.data[0].temp.toFixed(),
          humidity: results.data[0].rh.toFixed(),
          desc: results.data[0].weather.description,
          icon: results.data[0].weather.icon,
        });
        console.log(results.data[0].weather.icon);
      });
  };
  if (props.route.params.city !== 'london') {
    getweather();
  }
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
        <Title style={styles.sub}> Temperature = {info.temp}&deg; </Title>
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
