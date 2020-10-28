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
  ScrollView,
  Dimensions,
  StyleSheet
} from 'react-native';

const largura = Dimensions.get('screen').width;
const App = ()  => {
  return (
    <ScrollView>
      <Text>André</Text>
      <Image 
        source={require("./resource/img/alura.jpg")} 
        style={estilo.imagem}
      />
      <Text>Stela</Text>
      <Image 
        source={require("./resource/img/alura.jpg")} 
        style={estilo.imagem}
        />
    </ScrollView>
    ) 
  };

  const estilo = StyleSheet.create({
    imagem: {
      width: largura,
      height: largura
    }
  })

export default App;
