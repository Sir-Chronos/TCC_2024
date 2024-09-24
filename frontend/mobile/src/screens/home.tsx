import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Definindo os tipos das rotas
type RootStackParamList = {
  Maintenance: undefined; // Mudei de '{}' para 'undefined'
  Inventory: undefined;
};

export function HomeScreen() {
  // Obtendo o tipo correto para o navigation
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const Header = () => (
    <View className="flex-row justify-between items-center p-4 bg-blue-500">
      <Text className="text-2xl text-white">AMAN</Text>
      <TouchableOpacity>
        <Image
          source={{ uri: "https://via.placeholder.com/40" }}
          className="w-10 h-10 rounded-full"
        />
      </TouchableOpacity>
    </View>
  );

  const CustomButton = ({ title, screen }: { title: string; screen: keyof RootStackParamList }) => (
    <TouchableOpacity
      className="bg-blue-500 p-4 rounded-full mb-4"
      onPress={() => navigation.navigate(screen)}
    >
      <Text className="text-white text-center">{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1">
      {/* Header */}
      <Header />

      {/* Corpo */}
      <View className="flex-1 justify-center items-center p-5">
        <CustomButton title="Manutenção" screen="Maintenance" />
        <CustomButton title="Inventário" screen="Inventory" />
      </View>
    </View>
  );
}
