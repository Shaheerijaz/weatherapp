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
import Home from './screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <>
      <StatusBar barStyle="auto" backgroundColor="#00aaff" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color}) => {
              let iconName;
              if (route.name === 'home') {
                iconName = 'home-city-outline';
              } else if (route.name === 'search') {
                iconName = 'city';
              }
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={25}
                  color={color}
                />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: 'white',
            inactiveTintColor: 'gray',
            activeBackgroundColor: '#00aaff',
            inactiveBackgroundColor: '#00aaff',
          }}>
          <Tab.Screen name="search" component={Search} />
          <Tab.Screen
            name="home"
            component={Home}
            initialParams={{city: 'london'}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
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
