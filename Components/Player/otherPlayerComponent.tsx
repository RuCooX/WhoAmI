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

  let output: JSX.Element[] = [];
  const renderMitspieler = () => {
    for (let i = 0; i < SpielerJSON.Mitspieler.length; i++) {
      output.push(
        <PlayerCard
          key={i}
          spielerName={SpielerJSON.Mitspieler[i].SpielerName}
          characterName={SpielerJSON.Mitspieler[i].Character}
        />
      );
    }
    return output;
  };
  return <div className={classes.root}>{renderMitspieler()}</div>;
}
