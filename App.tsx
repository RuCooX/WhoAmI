import "react-native-gesture-handler";
import React, {useEffect, useState} from "react";
import firebaseConfig from "./Base";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

//Components
import SignIn from "./Components/auth/SignIn";
import SignUp from "./Components/auth/SignUp";
import PasswordReset from "./Components/auth/PasswordReset";
import Menu from "./Components/Menu";
import Spielfeld from "./Components/Spielfeld";
import Footer from "./Components/Footer";

const Stack = createStackNavigator();

export default function App() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const linking = {
        prefixes: ["/"],
        config: {
            screens: {
                Login: "login",
                SignUp: "signUp",
                PasswordReset: "passwordReset",
                Menu: "",
                Spielfeld: "game"
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
    }
    return (
        <NavigationContainer linking={linking}>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {user ? (
                    <>
                        <Stack.Screen name="Menu" component={Menu}/>
                        <Stack.Screen name="Spielfeld" component={Spielfeld}/>
                    </>
                ) : (
                    <>
                        <Stack.Screen name="Login" component={SignIn}/>
                        <Stack.Screen name="SignUp" component={SignUp}/>
                        <Stack.Screen name="PasswordReset" component={PasswordReset}/>
                    </>
                )}
            </Stack.Navigator>
            <Footer/>
        </NavigationContainer>
    );
}
