import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { linking } from "../../App";
import Menu from "../Menu";
import Footer from "../Footer";
import Spielfeld from "../Spielfeld";
import SpielErstellen from "../gameLogic/SpielErstellen";

const Stack = createStackNavigator();

export default function SignInStack() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "darkgray" },
        }}
      >
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Spielfeld" component={Spielfeld} />
        <Stack.Screen name="SpielErstellen" component={SpielErstellen} />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}
