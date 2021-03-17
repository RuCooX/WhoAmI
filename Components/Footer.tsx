import React from "react";
import { View } from "react-native";

import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";

const useStyles = makeStyles({
  copyright: {
    fontSize: "1.8vh",
    textAlign: "center",
    padding: "20px",
  },
});

export default function Footer() {
  const classes = useStyles();
  let yearDate: number = new Date().getFullYear();

  return (
    <View>
      <div className={classes.copyright}>© {yearDate} produced by RuCooX</div>
    </View>
  );
}
