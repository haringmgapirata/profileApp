import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../sign out/so_style'

const sign_out = ({ colorScheme, children }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={[styles.buttxt, colorScheme === 'dark' ? styles.darkText : styles.lightText]}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default sign_out