import React from "react";
import {Text, View} from "react-native";

//Material-UI
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
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
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function PasswordReset({navigation}: { navigation: any }) {
    const classes = useStyles();

    const signInButton = () => {
        navigation.navigate('Login')
    }
    return (
        <View>
            <Container maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h4">
                        Passwort vergessen
                    </Typography>
                    <p style={{marginTop: '20px', maxWidth: '100%'}}>
                        Wenn Sie ihr Passwort vergessen haben, können Sie hier einen Link zum
                        Zurücksetzen des Passworts anfordern.
                    </p>
                    <form className={classes.form}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="E-mail-Adresse"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            // type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            size="large"
                            className={classes.submit}>
                            Link anfordern
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link><Text onPress={signInButton}>Login</Text></Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </View>
    );
};

