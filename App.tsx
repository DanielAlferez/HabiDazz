import Main from "./src/Screens/Main";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateCicle from "./src/Screens/Create/CreateCicle";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Main}/>
        <Stack.Screen name="Create" component={CreateCicle}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
