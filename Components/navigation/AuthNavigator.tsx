import React, {useState, useEffect, createContext} from "react";
import firebaseConfig from "../../Base";
import {makeStyles} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import {createStackNavigator} from "@react-navigation/stack";
import {linking} from "../../App";
import Menu from "../Menu";
import Spielfeld from "../Spielfeld";
import SpielErstellen from "../gameLogic/SpielErstellen";
import {NavigationContainer} from "@react-navigation/native";
// @ts-ignore
import type {Theme} from '../types';
import Guest from "../auth/Guest";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import PasswordReset from "../auth/PasswordReset";

// @ts-ignore
export const ThemeContext = React.createContext();
export const AuthContext = createContext(null);
const Stack = createStackNavigator();

export const MyDefaultTheme: Theme = {
    dark: false,
    colors: {
        primary: 'rgb(0, 122, 255)',
        background: '#d9d9d9',
        // card: 'rgb(255, 255, 255)',
        // text: 'rgb(28, 28, 30)',
        // border: 'rgb(216, 216, 216)',
        notification: 'rgb(255, 59, 48)',
    },

};

export const MyDarkTheme: Theme = {
    dark: true,
    colors: {
        primary: 'rgb(10, 132, 255)',
        background: '#101921',
        // card: 'rgb(18, 18, 18)',
        // text: 'rgb(229, 229, 231)',
        // border: 'rgb(39, 39, 41)',
        notification: 'rgb(255, 69, 58)',
    },
};

const useStyles = makeStyles(({
    progressIcon: {
        position: "absolute",
        left: "0",
        right: "0",
        bottom: "0",
        top: "0",
        margin: "auto auto auto auto"
    }
}));

export default function AuthNavigator() {
    const classes = useStyles();
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [theme, setTheme] = useState('Light');
    const themeData = {theme, setTheme};

    // Handle user state changes
    function onAuthStateChanged(user: React.SetStateAction<null>) {
        firebaseConfig.auth().currentUser?.reload();

        if (firebaseConfig.auth().currentUser?.displayName) {
            setUser(user)
        }

        if (user) {
            setTimeout(() => {
                setUser(user)
            }, 1500);
        } else {
            setUser(null)
            firebaseConfig.auth().currentUser?.reload();
        }

        if (loading) setLoading(false)
    }

    useEffect(() => {
        // @ts-ignore
        return firebaseConfig.auth().onAuthStateChanged(onAuthStateChanged)
    }, [])

    if (loading) {
        return <>
            <div>
                <CircularProgress size={100} className={classes.progressIcon}/>
            </div>
        </>;
    }

    // @ts-ignore
    return user ? (
        <ThemeContext.Provider value={themeData}>
            <AuthContext.Provider value={{user}}>
                <NavigationContainer linking={linking} theme={theme === 'Light' ? MyDarkTheme : MyDefaultTheme}>
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false,
                            // cardStyle: { backgroundColor: "#101921" }
                        }}>
                        <Stack.Screen name="Menu" component={Menu}/>
                        <Stack.Screen name="Spielfeld" component={Spielfeld}/>
                        <Stack.Screen name="SpielErstellen" component={SpielErstellen}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </AuthContext.Provider>
        </ThemeContext.Provider>
    ) : (
        <ThemeContext.Provider value={themeData}>
            <AuthContext.Provider value={{user}}>
                <NavigationContainer linking={linking} theme={theme === 'Light' ? MyDarkTheme : MyDefaultTheme}>
                    <Stack.Navigator screenOptions={{
                        headerShown: false,
                        // cardStyle: {backgroundColor: "#101921"}
                    }}>
                        <Stack.Screen name="Guest" component={Guest}/>
                        <Stack.Screen name="Login" component={SignIn}/>
                        <Stack.Screen name="SignUp" component={SignUp}/>
                        <Stack.Screen name="PasswordReset" component={PasswordReset}/>
                    </Stack.Navigator> </NavigationContainer>
            </AuthContext.Provider>
        </ThemeContext.Provider>
    )
}