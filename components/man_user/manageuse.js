import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './mu_style'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';

const settings = ({ colorScheme, children }) => {
  return (
    <View style={styles.container}>
        <Text style={[styles.profile, colorScheme === 'dark' ? styles.darkText : styles.lightText]}>Profile</Text>
        <View style={styles.icon}>
            <FontAwesome name="dot-circle-o" size={30} color="#FF4500" />
        </View>
        <Text style={[styles.managetxt, colorScheme === 'dark' ? styles.darkText : styles.lightText]}>Manage User</Text>
        <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="chevron-right" size={25} color="#000" />
        </TouchableOpacity>
        
    </View>
    
  )
}

export default settings