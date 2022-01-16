import React, {useState, useEffect, createContext} from "react";
import firebaseConfig from "../../Base";
import {makeStyles} from "@material-ui/core/styles";
import SignInStack from "./SignInStack";
import SignOutStack from "./SignOutStack";
import CircularProgress from "@material-ui/core/CircularProgress";

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

export const AuthContext = createContext(null);

export default function AuthNavigator() {
    const classes = useStyles();
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

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
                <CircularProgress size={80} className={classes.progressIcon}/>
            </div>
        </>;
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