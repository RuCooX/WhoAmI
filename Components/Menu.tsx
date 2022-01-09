import React, { useContext, useEffect } from "react";
import { View } from "react-native";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import firebaseConfig from "../Base";
import { AuthContext } from "./navigation/AuthNavigator";

const useStyles = makeStyles((theme) => ({
  button: {},
}));

export default function Menu({ navigation }: { navigation: any }) {
  const classes = useStyles();
  const user = useContext(AuthContext);

  const handleLogout = () => {
    firebaseConfig
      .auth()
      .signOut()
      .then(() => {
        // Do something after logout is successful.
      });
  };

  useEffect(() => {
    console.log(user);
    firebaseConfig.auth().currentUser?.reload();
  }, []);

  return (
    <View>
      <div>Eingeloggt als:{user.displayName}</div>
      <Button size="large" className={classes.button} onClick={() => navigation.navigate("Spielfeld")}>
        Spiel starten
      </Button>
      <Button size="large" className={classes.button} onClick={() => navigation.navigate("SpielErstellen")}>
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
