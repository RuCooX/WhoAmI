import React from "react";
import { View } from "react-native";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  copyright: {
    fontSize: "1.8vh",
    textAlign: "center",
    background: "darkgray"
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
