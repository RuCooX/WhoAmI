import React, {useEffect, useState} from "react";
import {View} from "react-native";
import {makeStyles} from "@material-ui/core/styles";
import firebaseConfig from "../Base";
import {AccountCircleOutlined} from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";
import {List, ListItem, ListItemIcon} from "@material-ui/core";
import '../style/darkMode.css';
import Logo from '../images/whoamiLogo.png'
import {ThemeContext} from "./navigation/AuthNavigator";

const useStylesLight = makeStyles((Theme) => ({
    profileIcon: {
        fontSize: '50px',
        color: "#595959"
    },
    headerContainer: {
        boxShadow: '0 25px 15px -2px #bfbfbf',
        color: '#595959'
    }
}));

const useStylesDark = makeStyles((Theme) => ({
    profileIcon: {
        fontSize: '50px',
        color: "#ffffff"
    },
    headerContainer: {
        boxShadow: '0 25px 15px -2px #111',
        color: '#ffffff'
    }
}));

export default function HeaderIn() {
    // @ts-ignore
    const {setTheme, theme} = React.useContext(ThemeContext);
    const [displayName, setDisplayName] = useState(null);
    const [themeStyle, setThemeStyle] = useState(false);

    let classes;
    themeStyle ? classes = useStylesLight() : classes = useStylesDark()

    const handleThemeState = () => {
        setTheme(theme === 'Light' ? 'Dark' : 'Light')
        theme === 'Dark' ? setThemeStyle(false) : setThemeStyle(true)
    }

    useEffect(() => {
        setTheme(theme === 'Light' ? 'Light' : 'Dark')
        theme === 'Dark' ? setThemeStyle(true) : setThemeStyle(false)
        // @ts-ignore
        setDisplayName(firebaseConfig.auth().currentUser?.displayName)
    }, []);

    return (
        <View>
            <div className={classes.headerContainer}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={4}>
                        <List>
                            <ListItem style={{display: 'flex', justifyContent: 'flex-start'}}>
                                <ListItemIcon>
                                    <AccountCircleOutlined className={classes.profileIcon}/>
                                </ListItemIcon>
                                <span style={{fontSize: '20px'}}>{displayName}</span>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={4} style={{textAlign: 'center'}}>
                        {/*Logo oder ein anderes Element hier später möglich...*/}
                        {/*<div><img src={Logo} alt="Logo" width="70px"/></div>*/}
                    </Grid>
                    <Grid item xs={4}>
                        <div className="toggle-theme-wrapper">
                            <label className="toggle-theme" htmlFor="checkbox">
                                <input type="checkbox" id="checkbox" defaultChecked={theme !== 'Light'}
                                       onClick={handleThemeState}/>
                                <div className="slider round">
                                    <div className="dm-icon">☀️ 🌒</div>
                                </div>
                            </label>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </View>
    )
};