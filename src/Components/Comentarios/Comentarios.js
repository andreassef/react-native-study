import React, { Fragment, useState } from 'react';
import { FlatList, Text, TextInput, Image, View, TouchableOpacity } from "react-native";
import estilos from './estilos';

const Comentarios = ( { comentarios } ) => {

    const [estComentarios, setComentario] = useState( comentarios );
    const adicionarComentario = () => {
        limparCampoInput.clear();
        const novoComentario = {
            date: Date.now(),
            text: conteudoCampoInput,
            userName: 'André Assef'
        }

        setComentario( [...estComentarios, novoComentario ] );
    }

    let limparCampoInput;
    let conteudoCampoInput = '';
    return (
        <Fragment>
            <FlatList
                data = { estComentarios }
                keyExtractor = { (item, index) => index.toString() }
                renderItem = { ( { item } ) =>
                    <View style={estilos.alinhado}> 
                        <Text> { item.userName } </Text>
                        <Text> { item.text } </Text>
                    </View> 
                }
            />
            <View style = { estilos.alinhado }> 
                <TextInput
                    ref = { textoInput => limparCampoInput = textoInput} 
                    onChangeText = { texto => conteudoCampoInput = texto }
                    style = { {flex: 1} }
                    placeholder = { "Deixe um comentário "}
                />
                <TouchableOpacity onPress = { adicionarComentario }> 
                    <Image style = {estilos.imgSend} source = { require('../../../resource/img/send.png')} />
                </TouchableOpacity>
            </View>
       </Fragment>
    );
}

export default Comentarios;