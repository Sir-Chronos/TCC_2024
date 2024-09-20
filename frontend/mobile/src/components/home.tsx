import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export function HomeScreen({ navigation }: { navigation: any }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    return (
      <View className="flex-1 p-5 justify-center">
        <Text className="text-xl mb-2">Username:</Text>
        <TextInput
          className="border border-gray-300 p-3 mb-5 rounded"
          placeholder="Enter your name"
          value={username}
          onChangeText={setUsername}
        />
        <Text className="text-xl mb-2 text-red-500">Password</Text>
        <TextInput
          className="border border-gray-300 p-3 mb-5 rounded"
          placeholder="Enter your email"
          value={password}
          onChangeText={setPassword}
        />
        <Button
          title="Submit"
          onPress={() => navigation.navigate('Details', {username, password})}
        />
      </View>
    )
  }