//React Componenten
import React from "react";

//Eigene Componenten
import PlayerCard from "./PlayerCard";
import SpielerJSON from "../../Ressources/VorläufigeSpieler";

//Material UI
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
  })
);
export default function otherPlayerComponent() {
  const classes = useStyles();

  return (
    <PlayerCard
      spielerName={SpielerJSON.Spieler.SpielerName}
      characterName={SpielerJSON.Spieler.Character}
    />
  );
}
