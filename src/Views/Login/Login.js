import React, {Fragment, useState} from 'react';
import {
  Text, 
  TextInput, 
  Button,
  View
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import efetuaLogin from '../../api/login';
import estilos from './estilos';


const Login = ({navigation}) => {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [mesagemErro, setMessagemErro] = useState("");

    const tentarLogar = async() => {
        try {
            const token = await efetuaLogin(usuario, senha);
            await AsyncStorage.setItem("instalura_token", token);
            await AsyncStorage.getItem("instalura_token");
            navigation.navigate('Feed');
        } catch (error) {
            setMessagemErro(error.message);
        }
  }
 
  return (
      <Fragment>
          <View style={estilos.container}>
              <TextInput 
                placeholder="Usuario" 
                style={estilos.inputs}
                onChangeText = { texto => setUsuario(texto)}
              />
              <TextInput 
                placeholder="Senha" 
                secureTextEntry={true}
                style={estilos.inputs}
                onChangeText = { texto => setSenha(texto)}
              />
              <Text>{mesagemErro}</Text>
          </View>
          <View style = {estilos.botaoView}> 
            <Button title= "Entrar" onPress = {tentarLogar} />
          </View>
      </Fragment>
    ) 
  };

export default Login;
