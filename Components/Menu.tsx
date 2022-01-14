import React, {useContext, useEffect} from "react";
import {View} from "react-native";
import {makeStyles} from "@material-ui/core/styles";
import firebaseConfig from "../Base";
import {AuthContext} from "./navigation/AuthNavigator";
import {Box, Button} from '@material-ui/core';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(2),
        borderRadius: "25px 25px 25px 25px",
        padding: '30px',
        width: '350px'
    },
}));

export default function Menu({navigation}: { navigation: any }) {
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
            <div style={{marginBottom: '50px'}}>Eingeloggt als:{user.displayName}</div>

            <Box display="flex"
                 justifyContent="center">
                <Grid>
                    <Grid>
                        <Button size="large" className={classes.button} variant="contained" color="primary" fullWidth
                                onClick={() => navigation.navigate("Spielfeld")}>
                            Spiel starten
                        </Button>
                    </Grid>
                    <Grid>
                        <Button size="large" className={classes.button} variant="contained" color="primary" fullWidth
                                onClick={() => navigation.navigate("SpielErstellen")}>
                            Spiel erstellen
                        </Button>
                    </Grid>
                    <Grid>
                        <Button size="large" className={classes.button} variant="contained" color="primary" fullWidth>
                            Einstellungen
                        </Button>
                    </Grid>
                    <Grid>
                        <Button size="large" className={classes.button} variant="contained" color="primary" fullWidth>
                            Profil
                        </Button>
                    </Grid>
                    <Grid>
                        <Button size="large" className={classes.button} variant="contained" color="primary" fullWidth
                                onClick={() => {
                                    handleLogout();
                                }}>
                            Ausloggen
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </View>
    )
};