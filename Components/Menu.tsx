import React from "react";
import {ScrollView, View} from "react-native";
import {makeStyles} from "@material-ui/core/styles";
import firebaseConfig from "../Base";
import {Box, Button} from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import HeaderIn from "./HeaderIn";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        border: '5px double #808080',
        borderRadius: "25px 25px 25px 25px",
        padding: '30px',
        width: '350px'
    }
}));

export default function Menu({navigation}: { navigation: any }) {
    const classes = useStyles();

    const handleLogout = () => {
        firebaseConfig
            .auth()
            .signOut()
            .then(() => {
                // Do something after logout is successful.
            });
    };

    return (
        <View style={{flex: 1}}>
            <HeaderIn/>
            <ScrollView>
                <Box display="flex"
                     justifyContent="center" style={{marginTop: '60px'}}>
                    <Grid>
                        <Grid>
                            <Button size="large" className={classes.button} variant="contained" color="primary"
                                    fullWidth
                                    onClick={() => navigation.navigate("Spielfeld")}>
                                Spiel starten
                            </Button>
                        </Grid>
                        <Grid>
                            <Button size="large" className={classes.button} variant="contained" color="primary"
                                    fullWidth
                                    onClick={() => navigation.navigate("SpielErstellen")}>
                                Spiel erstellen
                            </Button>
                        </Grid>
                        <Grid>
                            <Button size="large" className={classes.button} variant="contained" color="primary"
                                    fullWidth>
                                Einstellungen
                            </Button>
                        </Grid>
                        <Grid>
                            <Button size="large" className={classes.button} variant="contained" color="primary"
                                    fullWidth>
                                Profil
                            </Button>
                        </Grid>
                        <Grid>
                            <Button size="large" className={classes.button} variant="contained" color="secondary"
                                    fullWidth
                                    onClick={() => {
                                        handleLogout();
                                    }}>
                                Logout
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </ScrollView>
            <View><Footer/></View>
        </View>
    )
};