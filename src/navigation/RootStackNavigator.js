/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import store from '../redux/app/store';
import {Provider} from 'react-redux';
import Login from '../screens/Login';
import {Image, StatusBar, TouchableOpacity, View} from 'react-native';
import Home from '../screens/Home';

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
