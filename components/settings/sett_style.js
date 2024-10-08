import { StyleSheet, View } from "react-native";

const styles= StyleSheet.create({
    container:{
        height: 100,
    },
    settingtit:{
        fontSize: 17,
        fontWeight: 'bold',
        left: 25,
    },
    notif:{
        left: 100,
        top: 15,
    },
    darkmode:{
        left: 100,
        bottom: 95,
    },
    icon:{
        backgroundColor: 'rgba(126, 96, 191, 0.2)',
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        left: 30,
        bottom: 20,
    },
    iconButton:{
        backgroundColor: 'rgba(211, 211, 211, 0.5)',
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        left: 280,
        bottom: 115,
    },
    moonicon:{
        backgroundColor: 'rgba(160, 214, 131, 0.2)',
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        left: 30,
        bottom: 10,
    },
    darkText: {
        color: 'white', 
      },
      lightText: {
        color: 'black', 
      },
})

export default styles