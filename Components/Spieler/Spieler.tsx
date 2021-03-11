//React Componenten
import React from "react";
import { View } from "react-native";

//Eigene Componenten
import Mitspieler from "./MitSpieler";
import SpielerJSON from "../../Ressources/VorläufigeSpieler";

//Material UI
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core/";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
);
export default function App() {
  const classes = useStyles();

  let output: JSX.Element[] = [];
  const test = () => {
    for (let i = 0; i < SpielerJSON.Mitspieler.length; i++) {
      output.push(
        <Grid item>
          <Mitspieler
            spielerName={SpielerJSON.Mitspieler[i].SpielerName}
            characterName={SpielerJSON.Mitspieler[i].Character}
          ></Mitspieler>
        </Grid>
      );
    }
    return output;
  };
  return (
    <View>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {test()}
        </Grid>
      </div>
    </View>
  );
}
