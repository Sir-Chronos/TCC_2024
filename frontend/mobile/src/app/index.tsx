import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from "../screens/login";
import { HomeScreen } from "../screens/home";
import { MaintenanceScreen } from "../screens/maintenance";
import { InventoryScreen } from "../screens/inventory";

type RootStackParamList = {
  Login: {}
  Home: {}
  Maintenance: {}
  Inventory: {}
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Maintenance" component={MaintenanceScreen} />
        <Stack.Screen name="Inventory" component={InventoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
