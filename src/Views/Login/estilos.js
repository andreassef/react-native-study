import { StyleSheet, Dimensions } from 'react-native';

const largura = Dimensions.get("screen").width;
const estilos = StyleSheet.create( 
    {
        container: {
            flexGrow:2,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 30,
            borderBottomColor: "black",
        },
        inputs: {
            width:largura * 0.8,
            textAlign: "center",
            marginTop: 40,
            fontSize: 30
        },
        botaoView: {
            alignItems: "center",
            marginBottom: 50
        }
    }
)

export default estilos;