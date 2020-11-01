import React, { Fragment } from 'react';
import { FlatList, Text, TextInput } from "react-native";

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
        <TextInput />
       </Fragment>
    );
}

export default Comentarios;