import "react-native-gesture-handler";
import React, {useEffect, useState} from "react";
import firebaseConfig from "./Base";
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

//Components
import Guest from "./Components/auth/Guest";
import SignIn from "./Components/auth/SignIn";
import SignUp from "./Components/auth/SignUp";
import PasswordReset from "./Components/auth/PasswordReset";
import Menu from "./Components/Menu";
import Spielfeld from "./Components/Spielfeld";
import Footer from "./Components/Footer";

const Stack = createStackNavigator();
export const AuthContext = React.createContext(undefined);

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
                Spielfeld: "game"
            },
        },
    };

    useEffect(() => {
        firebaseConfig.auth().onAuthStateChanged((user) => {
            firebaseConfig.auth().currentUser?.reload();

            if (user?.isAnonymous) {
                user.reload().then(() => {
                    setTimeout(() => {
                        firebaseConfig.auth().currentUser?.reload();
                        setUser(user)
                    }, 1500);
                });
            }
            if (!user?.isAnonymous) {
                // @ts-ignore
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
        <AuthContext.Provider value={{user}}>
            <NavigationContainer linking={linking}>
                <Stack.Navigator screenOptions={{
                    headerShown: false,
                    cardStyle: {backgroundColor: "darkgray"},
                }}>
                    {user ? (
                        <>
                            <Stack.Screen name="Menu" component={Menu}/>
                            <Stack.Screen name="Spielfeld" component={Spielfeld}/>
                        </>
                    ) : (
                        <>
                            <Stack.Screen name="Guest" component={Guest}/>
                            <Stack.Screen name="Login" component={SignIn}/>
                            <Stack.Screen name="SignUp" component={SignUp}/>
                            <Stack.Screen name="PasswordReset" component={PasswordReset}/>
                        </>
                    )}
                </Stack.Navigator>
                <Footer/>
            </NavigationContainer>
        </AuthContext.Provider>
    );
}
