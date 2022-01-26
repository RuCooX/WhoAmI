import React, {useCallback, useState} from 'react'
import {ScrollView, Text, View} from 'react-native'
import firebaseConfig from "../../Base";
import Logo from '../../images/whoamiLogo.png'
import Login from '../../images/login.png'

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
import HeaderIn from "../HeaderIn";
import HeaderOut from "../HeaderOut";
import Footer from "../Footer";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#a6a6a6'
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
        color: '#a6a6a6'
    },
    cssLabel: {
        padding: '10px',
        borderRadius: "20px 20px 20px 20px",
        color: '#a6a6a6',
        '&$cssFocused': {
            color: '#a6a6a6 !important'
        }
    },
    cssOutlinedInput: {
        padding: '10px',
        borderRadius: "25px 25px 25px 25px",
        color: '#a6a6a6'
    },
    cssFocused: {
        color: '#a6a6a6'
    },
    notchedOutline: {
        borderWidth: '1px',
        borderColor: '#a6a6a6 !important',
        color: '#a6a6a6',
        '&$cssFocused $notchedOutline': {
            borderColor: `primary !important`
        }
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        borderRadius: "25px 25px 25px 25px",
        padding: '15px',
        marginTop: '30px'
    },
    disabledButton: {
        backgroundColor: '#101921 !important',
        color: '#101921 !important'
    },
    buttonProgress: {
        marginLeft: '45%',
        marginTop: '10%'
    }
}));

export default function Guest({navigation}: { navigation: any }) {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [showIcon, setShowIcon] = useState(false);

    // const signUpButton = () => {
    //     navigation.navigate('SignUp')
    // };
    //
    // const signInButton = () => {
    //     navigation.navigate('Login')
    // };

    const handleSignInAsGuest = useCallback(async event => {
            event.preventDefault();
            const {displayName} = event.target.elements;
            setLoading(true);
            setShowIcon(true);

            await firebaseConfig.auth().signInAnonymously().then(function () {
                // @ts-ignore
                firebaseConfig.auth().currentUser.updateProfile({
                    displayName: displayName.value
                }).then(() => {
                });
            });
        },
        []
    );

    return (
        <View style={{flex: 1}}>
            <HeaderOut/>
            <ScrollView>
                <Container maxWidth="xs">
                    <CssBaseline/>
                    <div className={classes.paper}>
                        <img src={Logo} alt="Logo" width="150px"/>
                        <Typography component="h1" variant="h4" style={{marginTop: '50px'}}>
                            GAST ZUGANG
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
                                inputProps={{maxLength: 12}}
                                autoFocus
                                InputLabelProps={{
                                    classes: {
                                        root: classes.cssLabel,
                                        focused: classes.cssFocused
                                    },
                                }}
                                InputProps={{
                                    classes: {
                                        root: classes.cssOutlinedInput,
                                        focused: classes.cssFocused,
                                        notchedOutline: classes.notchedOutline
                                    }
                                }}
                            />
                            {!showIcon && <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                size="large"
                                disabled={loading}
                                classes={{disabled: classes.disabledButton}}
                                className={classes.submit}>
                                <img src={Login} alt="Login" width="40px" style={{marginRight: '5px'}}/>LOGIN
                            </Button>}
                            <div>{loading && <CircularProgress size={35} className={classes.buttonProgress}/>}</div>
                            {/*<Grid container>*/}
                            {/*    <Grid item xs>*/}
                            {/*        <Link><Text onPress={signInButton}>Login</Text></Link>*/}
                            {/*    </Grid>*/}
                            {/*    <Grid item>*/}
                            {/*        <Link><Text onPress={signUpButton}>Registrieren</Text></Link>*/}
                            {/*    </Grid>*/}
                            {/*</Grid>*/}
                        </form>
                    </div>
                </Container>
            </ScrollView>
            <View><Footer/></View>
        </View>
    )
}