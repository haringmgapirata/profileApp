import { StyleSheet, View } from "react-native";

const styles= StyleSheet.create({
    container:{
        height: 140,
    },
    iconButton:{
        backgroundColor: 'rgba(211, 211, 211, 0.5)',
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        left: 280,
        bottom: 65,
    },
    profile:{
        fontSize: 17,
        fontWeight: 'bold',
        left: 25,
    },
    icon:{
        backgroundColor: 'rgba(251, 136, 66, 0.2)',
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        left: 30,
    },
    managetxt:{
        left: 100,
        bottom: 35,
    },
    darkText: {
        color: 'white', 
      },
      lightText: {
        color: 'black', 
      },
})

export default styles