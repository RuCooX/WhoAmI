import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react'
import firebaseConfig from "./Base";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Menu from './Components/Menu';
import Player from './Components/Spieler/Spieler';
import Login from './Components/auth/Login';
import SignUp from "./Components/auth/SignUp";

const Stack = createStackNavigator();

export default function App() {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const linking = {
        prefixes: ['/'],
        config: {
            screens: {
                Login: '',
                SignUp: 'signUp',
                Menu: 'menu',
                Spieler: 'game'
            }
        }
    }
    useEffect(() => {
        firebaseConfig.auth().onAuthStateChanged(user => {
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
        return (
            <>LOADING...</>
        )
    }
    return (
        <NavigationContainer linking={linking}>
            <Stack.Navigator>
                {user ? (
                    <>
                        <Stack.Screen name="Menu" component={Menu}/>
                        <Stack.Screen name="Player" component={Player}/>
                    </>
                ) : (
                    <>
                        <Stack.Screen name="Login" component={Login}/>
                        <Stack.Screen name="SignUp" component={SignUp}/>
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
