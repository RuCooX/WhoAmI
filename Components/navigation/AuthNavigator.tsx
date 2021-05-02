import React, {useState, useEffect, createContext} from "react";
import firebaseConfig from "../../Base";
import SignInStack from "./SignInStack";
import SignOutStack from "./SignOutStack";

export const AuthContext = createContext(null);

export default function AuthNavigator() {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    // Handle user state changes
    function onAuthStateChanged(user: React.SetStateAction<null>) {
        if (user) {
            console.log(user)
            setUser(user)
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
        return <>LOADING...</>;
    }

    return user ? (
        // @ts-ignore
        <AuthContext.Provider value={{user}}>
            <SignInStack/>
        </AuthContext.Provider>
    ) : (
        <SignOutStack/>
    )
}