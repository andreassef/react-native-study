import React, { Fragment } from 'react';
import {
    Image,
    Text
} from 'react-native';
import estilos from './estilos';

const Foto = ( {urlFoto, descricao, quantidadeDeLikes} ) => {
  return (
    <Fragment>
        <Image 
            source={ { uri: urlFoto } } 
            style={ estilos.imagem}
        />
        <Text> {descricao} </Text>
        <Image 
            source={ verificaLike(quantidadeDeLikes) }
            style={ estilos.like } 
        />
    </Fragment>
) 
};

const verificaLike = (quantidadeDeLikes) => {
    if(quantidadeDeLikes > 0) {
        return require('../../../resource/img/s2-checked.png')
    } else {
        return require('../../../resource/img/s2.png')
    }
}

export default Foto;