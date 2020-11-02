import React, { Fragment } from 'react';
import { FlatList, Text, TextInput, Image, View, TouchableOpacity } from "react-native";
import estilos from './estilos';

const Comentarios = ( { comentarios } ) => {
    return (
        <Fragment>
            <FlatList
                data = { comentarios }
                keyExtractor = { (item, index) => index.toString() }
                renderItem = { ( { item } ) => 
                    <Text> { item.text } </Text>
                }
        />
        <View style = { estilos.alinhado }> 
            <TextInput 
                style = { {flex: 1} }
                placeholder = { "Deixe um comentário "}
            />
            <TouchableOpacity> 
                <Image style = {estilos.imgSend} source = { require('../../../resource/img/send.png')} />
            </TouchableOpacity>
            </View>
       </Fragment>
    );
}

export default Comentarios;