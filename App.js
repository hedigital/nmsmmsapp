/* eslint-disable prettier/prettier */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootStackNavigator from './src/navigation/RootStackNavigator';

function App() {
  return (
    <>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </>
  );
}

export default App;
