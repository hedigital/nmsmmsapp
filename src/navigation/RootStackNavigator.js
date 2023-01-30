/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import store from '../redux/app/store';
import {Provider} from 'react-redux';
import Login from '../screens/Login';
import {Image, StatusBar, TouchableOpacity, View} from 'react-native';
import Home from '../screens/Home';
import Dashboard from '../components/Dashboard';
import Edit from '../screens/Edit';
import axios from 'axios';

export let instance = axios.create({
  baseURL: 'https://api.hedigital.app/api/',
  maxContentLength: Infinity,
  maxBodyLength: Infinity,
});

export const setAxiosInstance = token => {
  instance = axios.create({
    baseURL: 'https://api.hedigital.app/api/',
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
    headers: {Authorization: 'Bearer ' + token},
  });
};

export default function RootStackNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <StatusBar animated={true} backgroundColor="#eab308" />
      <Stack.Navigator>
        <Stack.Screen
          name="OutletDetails"
          component={Home}
          options={{
            title: 'NMSM',
            headerStyle: {
              backgroundColor: '#eab308',
            },
            headerTintColor: '#fff',
            headerRight: () => (
              <View>
                <TouchableOpacity>
                  <Image
                    className="w-8 h-8"
                    source={require('../assets/logout.png')}
                  />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            title: 'NMSM',
            headerStyle: {
              backgroundColor: '#eab308',
            },
            headerTintColor: '#fff',
            headerRight: () => (
              <View>
                <TouchableOpacity>
                  <Image
                    className="w-8 h-8"
                    source={require('../assets/logout.png')}
                  />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Edit"
          component={Edit}
          options={{
            title: 'NMSM',
            headerStyle: {
              backgroundColor: '#eab308',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </Provider>
  );
}
