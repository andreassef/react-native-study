/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Fragment } from 'react';
import {
  Text,
  Image,
  ScrollView
} from 'react-native';


const App = ()  => {
  return (
    <ScrollView>
      <Text>André</Text>
      <Image 
        source={require("./resource/img/alura.jpg")} 
        style={
          estilos
        }
        />
      <Text>Stela</Text>
      <Image 
        source={require("./resource/img/alura.jpg")} 
        style={
          estilos
        }
        />
    </ScrollView>
    ) 
  };

  const estilos = {
    width: 380,
    height: 400
  }
export default App;
