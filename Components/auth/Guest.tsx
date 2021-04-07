import React, {useCallback, useState} from 'react'
import {Text, View} from 'react-native'
import firebaseConfig from "../../Base";
import Logo from '../../images/whoamiLogo.png'

//Material-UI
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
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
    },
    disabledButton: {
        backgroundColor: 'darkgray !important',
        color: 'darkgray !important'
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
        color: "#f0f0f0"
    }
}));

export default function Guest({navigation}: { navigation: any }) {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);

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
                        });
                    }
                }).then(() => {
                    if (!loading) {
                        setLoading(true);
                        setTimeout(() => {
                            firebaseConfig.auth().currentUser?.reload();
                            setLoading(false);
                        }, 1500);
                    }
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
                            disabled={loading}
                            classes={{disabled: classes.disabledButton}}
                            className={classes.submit}>
                            ANMELDEN
                            {loading && <CircularProgress size={30} className={classes.buttonProgress}/>}
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