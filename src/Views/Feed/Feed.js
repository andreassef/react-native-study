import React, { Fragment, useState, useEffect } from 'react';
import {
  ScrollView,
  FlatList,
  StatusBar
} from 'react-native';
import { Cabecalho } from '../../Components/Cabecalho';
import { Foto } from '../../Components/Foto';
import { Comentarios } from '../../Components/Comentarios';
import lerFotos from '../../api/feed';
import { curtirFoto, verificaLike } from '../../api/curtidas';


const Feed = () => {
  const [fotos, setFotos] = useState([]);
  useEffect(() => {
    // o userEffect nao pode ter um retorno, em caso de precisar trabalhar com retorno devemos criar outra funcao dentro
    // o userEffect até pode retornar um valor, contudo ele so será chamado no caso do componente ser destruido
    
    lerFotos(setFotos);
  }, [])
  return (
    <ScrollView>
      <StatusBar 
        backgroundColor="white" 
        barStyle="dark-content"
      />
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
              curtirFoto = {curtirFoto}
              verificaLike = {verificaLike}
            />
            <Comentarios comentarios = { item.comentarios } />
          </Fragment>
        }
      />
    </ScrollView>
    ) 
  };

export default Feed;
