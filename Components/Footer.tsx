import React from "react";
import {View} from "react-native";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    footerField: {
        fontSize: "1.8vh",
        textAlign: "center",
        color: '#808080'
    },
});

export default function Footer() {
    const classes = useStyles();
    let yearDate: number = new Date().getFullYear();

    return (
        <View>
            <div className={classes.footerField}>© {yearDate} produced by RuCooX</div>
        </View>
    );
}
