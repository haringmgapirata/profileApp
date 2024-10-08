import { StyleSheet, View } from "react-native";

const styles= StyleSheet.create({
    container:{
        height: 350,
        
    },
    pic:{
        height: 125,
        width: 125,
        borderRadius: 100,
        
    },
    piccont:{
        borderRadius: 100,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowRadius: 3.5,
        elevation: 5,
        borderRadius: 100,
        top: 70,
        left: 25,
        height: 125,
        width: 125,
    },
    fname:{
        fontSize: 40,
        fontWeight: 'bold',
        top: 70,
        left: 25,
    },
    lname:{
        fontSize: 40,
        opacity: 0.5,
        top: 50,
        left: 25,
    },
    namecont:{
        width: 270,
        backgroundColor: 'white',
    },
    joined:{
        left: 175,
        bottom: 125,
        fontSize: 15,
        opacity: 0.5,
    },
    yr:{
        left: 175,
        bottom: 125,
        fontSize: 17,
        fontWeight: 'bold',
    },
    darkText: {
        color: 'white', // Text color for dark mode
      },
      lightText: {
        color: 'black', // Text color for light mode
      },
})

export default styles