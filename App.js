import React, { Fragment } from 'react';
import {
  ScrollView,
  Dimensions,
  StyleSheet,
  FlatList
} from 'react-native';
import { Cabecalho } from './src/Components/Cabecalho';
import { Foto } from './src/Components/Foto';

const informacoes = [
  {id: 1, usuario: "André"},
  {id: 2, usuario: "Stela"},
  {id: 3, usuario: "Cris"},
]

const App = () => {
  return (
    <ScrollView>
      <FlatList       /* FlatList nos ajuda a criar uma lista na sintax do jsx */
        data={informacoes} /* data recebe o vetor que desejamos percorrer */
        keyExtractor = {(item) => item.id.toString()} /* keyExtractor auxiliar o React Native a identificar cada item da nossa lista */
        renderItem={ ({item}) => 
          <Fragment>
            <Cabecalho nomeUsuario={item.usuario}/>
            <Foto />
          </Fragment>
        }
      />
    </ScrollView>
    ) 
  };

export default App;
