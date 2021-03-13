import React, {useCallback} from 'react'
import {Text, View} from 'react-native'
import firebaseConfig from "../../Base";
import Logo from '../../images/whoamiLogo.png'

//Material-UI
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
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

export default function Guest({navigation}: { navigation: any }) {
    const classes = useStyles();

    const signUpButton = () => {
        navigation.navigate('SignUp')
    };

    const signInButton = () => {
        navigation.navigate('Login')
    };

    const handleSignInAsGuest = useCallback(async event => {
            event.preventDefault();
            const {displayName} = event.target.elements;

            await firebaseConfig
                .auth()
                .signInAnonymously().then((userCredential) => {
                    if (userCredential) {
                        userCredential.user?.updateProfile({
                            displayName: displayName.value
                        }).then(() => {

                        })
                    }
                    console.log(displayName.value)
                }).catch(error => {
                    alert(error);
                });
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
                        Als Gast anmelden
                    </Typography>
                    <form className={classes.form} onSubmit={handleSignInAsGuest}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="displayName"
                            label="Nutzername"
                            name="displayName"
                            autoComplete="off"
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
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            size="large"
                            className={classes.submit}>
                            ANMELDEN
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link><Text onPress={signInButton}>Login</Text></Link>
                            </Grid>
                            <Grid item>
                                <Link><Text onPress={signUpButton}>Registrieren</Text></Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </View>
    )
}