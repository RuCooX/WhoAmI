// import * as React from "react";
// import {NavigationContainer} from "@react-navigation/native";
// import {linking} from "../../App";
// import {createStackNavigator} from "@react-navigation/stack";
// import Menu from "../Menu";
// import Spielfeld from "../Spielfeld";
// import SpielErstellen from "../gameLogic/SpielErstellen";
// import {useState} from "react";
// // @ts-ignore
// import type {Theme} from '../types';
//
// // @ts-ignore
// export const ThemeContextIn = React.createContext();
// const Stack = createStackNavigator();
//
// export const MyDefaultTheme: Theme = {
//     dark: false,
//     colors: {
//         primary: 'rgb(0, 122, 255)',
//         background: '#d9d9d9',
//         // card: 'rgb(255, 255, 255)',
//         // text: 'rgb(28, 28, 30)',
//         // border: 'rgb(216, 216, 216)',
//         notification: 'rgb(255, 59, 48)',
//     },
//
// };
//
// export const MyDarkTheme: Theme = {
//     dark: true,
//     colors: {
//         primary: 'rgb(10, 132, 255)',
//         background: '#101921',
//         // card: 'rgb(18, 18, 18)',
//         // text: 'rgb(229, 229, 231)',
//         // border: 'rgb(39, 39, 41)',
//         notification: 'rgb(255, 69, 58)',
//     },
// };
//
// export default function SignInStack() {
//     const [theme, setTheme] = useState('Light');
//     const themeData = {theme, setTheme};
//
//     return (
//         <ThemeContextIn.Provider value={themeData}>
//             <NavigationContainer linking={linking} theme={theme === 'Light' ? MyDarkTheme : MyDefaultTheme}>
//                 <Stack.Navigator
//                     screenOptions={{
//                         headerShown: false,
//                         // cardStyle: { backgroundColor: "#101921" }
//                     }}>
//                     <Stack.Screen name="Menu" component={Menu}/>
//                     <Stack.Screen name="Spielfeld" component={Spielfeld}/>
//                     <Stack.Screen name="SpielErstellen" component={SpielErstellen}/>
//                 </Stack.Navigator>
//             </NavigationContainer>
//         </ThemeContextIn.Provider>
//     );
// }
