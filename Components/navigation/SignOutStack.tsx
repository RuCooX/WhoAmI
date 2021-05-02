import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {linking} from "../../App";
import Guest from "../auth/Guest";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import Footer from "../Footer";
import PasswordReset from "../auth/PasswordReset";

const Stack = createStackNavigator();

export default function SignOutStack() {
    return (
        <NavigationContainer linking={linking}>
            <Stack.Navigator screenOptions={{
                headerShown: false,
                cardStyle: {backgroundColor: "darkgray"}
            }}>
                <Stack.Screen name="Guest" component={Guest}/>
                <Stack.Screen name="Login" component={SignIn}/>
                <Stack.Screen name="SignUp" component={SignUp}/>
                <Stack.Screen name="PasswordReset" component={PasswordReset}/>
            </Stack.Navigator>
            <Footer/>
        </NavigationContainer>
    )
}