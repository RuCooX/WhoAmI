import React from "react";
import {View} from "react-native";
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {

    }
}));

export default function Menu() {
    const classes = useStyles();

    return (
        <View>
            <Button size="large" className={classes.button}>Spiel starten</Button>
            <Button size="large" className={classes.button}>Spiel erstellen</Button>
            <Button size="large" className={classes.button}>Einstellungen</Button>
            <Button size="large" className={classes.button}>Profil</Button>
            <Button size="large" className={classes.button}>Ausloggen</Button>
        </View>
    );
}
