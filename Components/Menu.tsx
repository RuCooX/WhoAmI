import React from "react";
import {View} from "react-native";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import firebaseConfig from "../Base";

const useStyles = makeStyles((theme) => ({
    button: {}
}));

export default function Menu({navigation}: { navigation: any }) {
    const classes = useStyles();

    const handleLogout = () => {
        firebaseConfig
            .auth()
            .signOut()
            .then(() => {
                // Do something after logout is successful.
                window.location.reload();
            });
    };

    return (
        <View>
            <div>
                Eingeloggt als: {firebaseConfig.auth().currentUser?.displayName}
            </div>
            <Button
                size="large"
                className={classes.button}
                onClick={() => navigation.navigate("Spielfeld")}>
                Spiel starten
            </Button>
            <Button size="large" className={classes.button}>
                Spiel erstellen
            </Button>
            <Button size="large" className={classes.button}>
                Einstellungen
            </Button>
            <Button size="large" className={classes.button}>
                Profil
            </Button>
            <Button
                size="large"
                className={classes.button}
                onClick={() => {
                    handleLogout();
                }}
            >
                Ausloggen
            </Button>
        </View>
    );
}
