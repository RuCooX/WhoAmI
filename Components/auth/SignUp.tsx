import React, {useCallback} from "react";
import {Text, View} from "react-native";

//Material-UI
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1)
    },
    cssLabel: {
        padding: '10px',
        borderRadius: "20px 20px 20px 20px"
    },
    cssOutlinedInput: {
        padding: '10px',
        borderRadius: "25px 25px 25px 25px"
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        borderRadius: "25px 25px 25px 25px",
        padding: '15px'
    }
}));

export default function SignUp({navigation}: { navigation: any }) {
    const classes = useStyles();

    const signInButton = () => {
        navigation.navigate('Login')
    };

    const signInAsGuest = () => {
        navigation.navigate('Guest')
    };

    const handleSignUp = useCallback(async event => {

    }, []);

    return (
        <View>
            <Container maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h4">
                        Registrieren
                    </Typography>
                    <form className={classes.form}>
                        <TextField
                            name="name"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Benutzername"
                            autoFocus
                            autoComplete="off"
                            InputLabelProps={{
                                classes: {
                                    root: classes.cssLabel
                                },
                            }}
                            InputProps={{
                                classes: {
                                    root: classes.cssOutlinedInput
                                }
                            }}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="E-Mail-Adresse"
                            name="email"
                            autoComplete="off"
                            InputLabelProps={{
                                classes: {
                                    root: classes.cssLabel
                                },
                            }}
                            InputProps={{
                                classes: {
                                    root: classes.cssOutlinedInput
                                }
                            }}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Passwort"
                            type="password"
                            id="password"
                            autoComplete="off"
                            InputLabelProps={{
                                classes: {
                                    root: classes.cssLabel
                                },
                            }}
                            InputProps={{
                                classes: {
                                    root: classes.cssOutlinedInput
                                }
                            }}
                        />
                        <FormControlLabel
                            control={<Checkbox value="allowExtraEmails" color="primary" required/>}
                            label="Durch Ihre Registrierung stimmen Sie unseren Nutzungsbedingungen zu."
                        />
                        <Button
                            type="submit"
                            fullWidth
                            size="large"
                            variant="contained"
                            color="primary"
                            className={classes.submit}>
                            Registrieren
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link><Text onPress={signInButton}>Login</Text></Link>
                            </Grid>
                            <Grid item>
                                <Link><Text onPress={signInAsGuest}>Als Gast</Text></Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </View>
    );
};