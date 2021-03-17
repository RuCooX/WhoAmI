//React Componenten
import React from "react";
import { View } from "react-native";

//Eigene Componenten
import Mitspieler from "./MitSpieler";
import SpielerJSON from "../../Ressources/VorläufigeSpieler";

//Material UI
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core/";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
  })
);
export default function Spieler() {
  const classes = useStyles();

  let output: JSX.Element[] = [];
  const renderMitspieler = () => {
    for (let i = 0; i < SpielerJSON.Mitspieler.length; i++) {
      output.push(
        <Mitspieler
          key={i}
          spielerName={SpielerJSON.Mitspieler[i].SpielerName}
          characterName={SpielerJSON.Mitspieler[i].Character}
        ></Mitspieler>
      );
    }
    return output;
  };
  return <div className={classes.root}>{renderMitspieler()}</div>;
}
