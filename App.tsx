import "react-native-gesture-handler";
import React from "react";
import { DefaultTheme } from "@react-navigation/native";

//Components
import AuthNavigator from "./Components/navigation/AuthNavigator";

const mainTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export const linking = {
  prefixes: ["/"],
  config: {
    screens: {
      Guest: "guest",
      Login: "login",
      SignUp: "signUp",
      PasswordReset: "passwordReset",
      Menu: "",
      Spielfeld: "game",
      SpielErstellen: "spielErstellen",
    },
  },
};

export default function App() {
  return <AuthNavigator />;
}
