import React, { Fragment, useState } from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { curtirFoto, verificaLike } from '../../api/curtidas';
import estilos from './estilos';

const Foto = ( { urlFoto, descricao, quantidadeDeLikes } ) => {

  const [curtiu, setCurtiu] = useState(false);
  const [likes, setLikes] = useState(quantidadeDeLikes);
  
  const clicouCurtir = () => {
    const [novoEstadoCurtiu, quantidade] = curtirFoto(curtiu, likes);
    setLikes(quantidade);
    setCurtiu(novoEstadoCurtiu);
  }

  return (
    <Fragment>
        <Image 
            source={ { uri: urlFoto } } 
            style={ estilos.imagem}
        />
        <Text> {descricao} </Text>
        <View style={ estilos.viewLike }>
            <TouchableOpacity onPress={clicouCurtir}>
                <Image 
                    source={ verificaLike(curtiu) }
                    style={ estilos.like } 
                />
            </TouchableOpacity>
            <Text> curtidas {likes} </Text>
        </View>
    </Fragment>
) 
};


export default Foto;