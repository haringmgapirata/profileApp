import { StyleSheet, View } from "react-native";

const styles= StyleSheet.create({
    container:{
        height: 100,
    },
    button:{
        backgroundColor: 'rgba(237, 232, 220, 1)',
        width: 110,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        top: 40,
        left: 25, 
    },
    buttxt:{
        fontSize: 15,
        fontWeight: 'bold',
    },
    darkText: {
        color: '#180161', 
      },
      lightText: {
        color: '#000', 
      },
})

export default styles