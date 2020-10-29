import React, {Fragment} from 'react';
import {
    Image,
    Text,
    View
} from 'react-native';
import estilo from './estilo';

const Cabecalho = ({nomeUsuario}) => {
    return (
        <View style={ estilo.cabecalho}> 
            <Image 
                source={require('../../../resource/img/s2.png')}
                style={estilo.fotoUsuario} />
            <Text>{nomeUsuario}</Text>

        </View>
    );
}

export default Cabecalho;