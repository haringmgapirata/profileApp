import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useColorScheme } from 'nativewind';
import Profile from '../profile/components/profile_pic/profpic';
import Manage_user from '../profile/components/man_user/manageuse'
import Settings from '../profile/components/settings/setting'
import Sign_Out from '../profile/components/sign out/sign_out'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const {colorScheme, toggleColorScheme} = useColorScheme();
  return (
    <View style={[styles.container, { backgroundColor: colorScheme === 'dark' ? '#1a202c' : '#f7fafc' }]}> 
      <Profile colorScheme={colorScheme}/>
      <Manage_user colorScheme={colorScheme}/>
      <Settings colorScheme={colorScheme}/>
      <TouchableOpacity style={styles.button} onPress={toggleColorScheme}>
          <FontAwesome name="chevron-right" size={25} color="#000" />
      </TouchableOpacity>
      <Sign_Out colorScheme={colorScheme}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: 'rgba(211, 211, 211, 0.5)',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    left: 280,
  },
  buttonText: {
    color: 'white', // Text color
    fontSize: 16,
  },
  
});
