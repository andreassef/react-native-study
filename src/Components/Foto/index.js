import React, { Fragment } from 'react';
import {
    Image
} from 'react-native';
import estilos from './estilos';

const Foto = () => {
  return (
    <Image 
        source={require('../../../resource/img/alura.jpg')} 
        style={ estilos.imagem}
    />
) 
};

export default Foto;