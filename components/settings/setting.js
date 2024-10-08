import { View, Text, TouchableOpacity,} from 'react-native'
import React from 'react'
import styles from './sett_style'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const setting = ({ colorScheme, children }) => {
  return (
    <View style={styles.container}>
        <Text style={[styles.settingtit, colorScheme === 'dark' ? styles.darkText : styles.lightText]}>Settings</Text>
        <Text style={[styles.notif, colorScheme === 'dark' ? styles.darkText : styles.lightText]}>Notifications</Text>
        <View style={styles.icon}>
            <FontAwesome name="bell-o" size={25} color="#433878" />
        </View>
        <View style={styles.moonicon}>
            <FontAwesome name="moon-o" size={25} color="#72BF78" />
        </View>
        <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="chevron-right" size={25} color="#000" />
        </TouchableOpacity>
        <Text style={[styles.darkmode, colorScheme === 'dark' ? styles.darkText : styles.lightText]}>Dark Mode</Text>
    </View>
  )
}

export default setting