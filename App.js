import React, { Fragment, useState, useEffect } from 'react';
import {
  ScrollView,
  FlatList
} from 'react-native';
import { Cabecalho } from './src/Components/Cabecalho';
import { Foto } from './src/Components/Foto';
import lerFotos from './src/api/feed';

const App = () => {
  const [fotos, setFotos] = useState([]);
  useEffect(() => {
    // o userEffect nao pode ter um retorno, em caso de precisar trabalhar com retorno devemos criar outra funcao dentro
    // o userEffect até pode retornar um valor, contudo ele so será chamado no caso do componente ser destruido
    
    lerFotos(setFotos);
  }, [])
  return (
    <ScrollView>
      <FlatList       /* FlatList nos ajuda a criar uma lista na sintax do jsx */
        data={fotos} /* data recebe o vetor que desejamos percorrer */
        keyExtractor = {(item) => item.id.toString()} /* keyExtractor auxiliar o React Native a identificar cada item da nossa lista */
        renderItem={ ({item}) => 
          <Fragment>
            <Cabecalho 
              nomeUsuario={item.userName}
              urlImage={item.userURL}
            />
            <Foto 
              urlFoto = { item.url }
              descricao = { item.description }
              quantidadeDeLikes = { item.likes }
            />
          </Fragment>
        }
      />
    </ScrollView>
    ) 
  };

export default App;
