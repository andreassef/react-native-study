import 'react-native-gesture-handler';
import React, { Fragment, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Feed from "./src/Views/Feed/Feed"
import Login from './src/Views/Login/Login';
import { createStackNavigator } from  '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name= "Bem Vindo" component={Login} />
          <Stack.Screen name = "Feed" component={Feed} />
        </Stack.Navigator>
      </NavigationContainer>
    ) 
  };

export default App;
