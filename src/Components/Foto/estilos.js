import { StyleSheet, Dimensions } from 'react-native';

const largura = Dimensions.get('screen').width;
const estilos = StyleSheet.create({
    imagem: {
      width: largura,
      height: largura
    }
})

export default estilos;