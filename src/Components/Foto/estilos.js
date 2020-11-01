import { StyleSheet, Dimensions } from 'react-native';

const largura = Dimensions.get('screen').width;
const estilos = StyleSheet.create({
    imagem: {
      width: largura,
      height: largura
    },
    like: {
      width: 40,
      height: 40,
      margin: 5
    }
})

export default estilos;