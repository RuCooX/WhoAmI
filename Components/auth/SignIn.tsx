import React, {useCallback} from 'react'
import {Text, View} from 'react-native'
import firebaseConfig from "../../Base";
import Logo from '../../images/whoamiLogo.png'

//Material-UI
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

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

export default function SignIn({navigation}: { navigation: any }) {
    const classes = useStyles();

    const signUpButton = () => {
        navigation.navigate('SignUp')
    };

    const passwordResetButton = () => {
        navigation.navigate('PasswordReset')
    };

    const signInAsGuest = () => {
        navigation.navigate('Guest')
    };

    const handleLogin = useCallback(async event => {
            event.preventDefault();
            const {email, password} = event.target.elements;

            await firebaseConfig
                .auth()
                .signInWithEmailAndPassword(email.value, password.value)
                .then((response) => {
                    firebaseConfig.auth().onAuthStateChanged(user => {
                        navigation.navigate('')
                    })
                })
                .catch(error => {
                    alert(error)
                })
                .catch(error => {
                    alert(error)
                })
        },
        []
    );

    return (
        <View>
            <Container maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <img src={Logo} alt="Logo" width="150px"/>
                    <Typography component="h1" variant="h4">
                        Login
                    </Typography>
                    <form className={classes.form} onSubmit={handleLogin}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="E-Mail-Adresse"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            InputLabelProps={{
                                classes: {
                                    root: classes.cssLabel
                                },
                            }}
                            InputProps={{
                                classes: {
                                    root: classes.cssOutlinedInput,
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
                            autoComplete="current-password"
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
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Angemeldet bleiben"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            size="large"
                            className={classes.submit}>
                            LOGIN
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link><Text onPress={passwordResetButton}>Passwort vergessen?</Text></Link>
                            </Grid>
                            <Grid item>
                                <Link><Text onPress={signUpButton}>Registrieren</Text></Link>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs>
                                <Link><Text onPress={signInAsGuest}>Als Gast</Text></Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </View>
    )
}