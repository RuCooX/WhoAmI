import React, {useEffect, useState} from "react";
import {View} from "react-native";
import {makeStyles} from "@material-ui/core/styles";
import firebaseConfig from "../Base";
import Grid from "@material-ui/core/Grid";
import {AccountCircleOutlined} from "@material-ui/icons";
import {List, ListItem, ListItemIcon} from "@material-ui/core";
import Logo from '../images/whoamiLogo.png'
import '../style/darkMode.css';

const useStyles = makeStyles((theme) => ({}));

export default function Header() {
    const classes = useStyles();
    const [displayName, setDisplayName] = useState(null);

    useEffect(() => {
        // @ts-ignore
        setDisplayName(firebaseConfig.auth().currentUser?.displayName)
    }, []);

    return (
        <View>
            <div style={{marginBottom: '50px', backgroundColor: 'grey'}}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={4}>
                        <div className="toggle-theme-wrapper">
                            <div className="dm-icon">☀️</div>
                            <label className="toggle-theme" htmlFor="checkbox">
                                <input type="checkbox" id="checkbox"/>
                                <div className="slider round"></div>
                            </label>
                            <div className="dm-icon">🌒</div>
                        </div>
                    </Grid>
                    <Grid item xs={4} style={{textAlign: 'center'}}>
                        {/*Logo oder ein anderes Element hier später möglich...*/}
                        {/*<div><img src={Logo} alt="Logo" width="70px"/></div>*/}
                    </Grid>
                    <Grid item xs={4}>
                        <List>
                            <ListItem style={{display: 'flex', justifyContent: 'flex-end'}}>
                                <ListItemIcon><AccountCircleOutlined style={{fontSize: '50px'}}/></ListItemIcon>
                                <div>{displayName}</div>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </div>
        </View>
    )
};