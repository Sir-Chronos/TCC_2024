import { useState } from "react";
import { View, Text, TextInput, Button, useColorScheme, StyleSheet } from "react-native";

export function LoginScreen({ navigation }: { navigation: any }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    // Detecta o tema do sistema (light ou dark)
    const theme = useColorScheme();
    
    return (
      <View style={[styles.container, theme === 'dark' ? styles.darkBackground : styles.lightBackground]}>
        <Text style={[styles.text, theme === 'dark' ? styles.darkText : styles.lightText]}>Username:</Text>
        <TextInput
          style={[styles.input, theme === 'dark' ? styles.darkInput : styles.lightInput]}
          placeholder="Enter your name"
          placeholderTextColor={theme === 'dark' ? '#ccc' : '#555'}
          value={username}
          onChangeText={setUsername}
        />
        <Text style={[styles.text, theme === 'dark' ? styles.darkText : styles.lightText]}>Password:</Text>
        <TextInput
          style={[styles.input, theme === 'dark' ? styles.darkInput : styles.lightInput]}
          placeholder="Enter your password"
          placeholderTextColor={theme === 'dark' ? '#ccc' : '#555'}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button
          title="Submit"
          onPress={() => navigation.navigate('Details', { username, password })}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  lightBackground: {
    backgroundColor: '#fff',
  },
  darkBackground: {
    backgroundColor: '#333',
  },
  lightText: {
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
  lightInput: {
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  darkInput: {
    borderColor: '#666',
    backgroundColor: '#444',
  },
});
