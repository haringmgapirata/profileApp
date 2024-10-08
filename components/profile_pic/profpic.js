import { View, Text } from 'react-native'
import React from 'react'
import styles from './prof_style'
import { Image } from 'react-native'

const profpic = ({ colorScheme, children }) => {
  return (
    <View style={styles.container}>
        <View style={styles.piccont}>
            <Image
                source={require('../img/123.png')}
                style={styles.pic}
            />
        </View>
        <Text style={[styles.fname, colorScheme === 'dark' ? styles.darkText : styles.lightText]}>Rex</Text>
        <Text style={[styles.lname, colorScheme === 'dark' ? styles.darkText : styles.lightText]}>Lumantao</Text>
        <Text style={[styles.joined, colorScheme === 'dark' ? styles.darkText : styles.lightText]}>Joined</Text>
        <Text style={[styles.yr, colorScheme === 'dark' ? styles.darkText : styles.lightText]}>1 year ago</Text>
    </View>
  )
}

export default profpic