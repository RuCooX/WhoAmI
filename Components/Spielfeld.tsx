import React from "react";
import { View } from "react-native";

import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  ThemeProvider,
  TextareaAutosize,
  Grid,
} from "@material-ui/core";
import theme from "../theme";

import Spieler from "./Spieler/Spieler";
const useStyles = makeStyles({
  root: {},
});

export default function Spielfeld() {
  const classes = useStyles();

  return (
    <View>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Spieler></Spieler>
        </Grid>
        <Grid item xs={12}>
          <TextareaAutosize placeholder="Notizen" />
        </Grid>
      </Grid>
    </View>
  );
}
