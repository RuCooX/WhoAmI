import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import firebaseConfig from "./Base";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

//Components
import Guest from "./Components/auth/Guest";
import SignIn from "./Components/auth/SignIn";
import SignUp from "./Components/auth/SignUp";
import PasswordReset from "./Components/auth/PasswordReset";
import Menu from "./Components/Menu";
import Spielfeld from "./Components/Spielfeld";
import Footer from "./Components/Footer";

const Stack = createStackNavigator();

const mainTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const linking = {
    prefixes: ["/"],
    config: {
      screens: {
        Guest: "guest",
        Login: "login",
        SignUp: "signUp",
        PasswordReset: "passwordReset",
        Menu: "",
        Spielfeld: "game",
      },
    },
  };
  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoading(false);
        // @ts-ignore
        setUser(user);
      } else {
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <>LOADING...</>;

    //"linear-gradient(58deg, rgba(86,91,117,1) 0%, rgba(75,79,100,1) 33%, rgba(139,76,86,1) 100%)";
  }
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <NavigationContainer linking={linking} theme={mainTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: "darkgray" },
          }}
        >
          {user ? (
            <>
              <Stack.Screen name="Menu" component={Menu} />
              <Stack.Screen name="Spielfeld" component={Spielfeld} />
            </>
          ) : (
            <>
              <Stack.Screen name="Guest" component={Guest} />
              <Stack.Screen name="Login" component={SignIn} />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="PasswordReset" component={PasswordReset} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <Footer />
    </View>
  );
}
