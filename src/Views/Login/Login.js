import React, {Fragment, useState} from 'react';
import {
  Text, 
  TextInput, 
  Button,
  View
} from 'react-native';
import estilos from './estilos'


const Login = () => {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const tentarLogar = () => {
      console.warn('logando', usuario, senha);
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
          </View>
          <View style = {estilos.botaoView}> 
            <Button title= "Entrar" onPress = {tentarLogar} />
          </View>
      </Fragment>
    ) 
  };

export default Login;
