import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from "native-base";
import HomeScreenContent from './Components/Navigation';
import Gallery from "./Components/Gallery";
import ReactLogo from "./Components/ReactLogo";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreenContent" component={HomeScreenContent} />
          <Stack.Screen name="Gallery" component={Gallery} />
          <Stack.Screen name="ReactLogo" component={ReactLogo} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
export default App;