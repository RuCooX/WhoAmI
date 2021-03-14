import React from "react";
import { View } from "react-native";

import { makeStyles } from "@material-ui/core/styles";
import { TextareaAutosize } from "@material-ui/core/";

import Spieler from "./Spieler/Spieler";
const useStyles = makeStyles({});

export default function Spielfeld() {
  const classes = useStyles();

  return (
    <View>
      <Spieler></Spieler>
      <TextareaAutosize placeholder="Notizen" />
    </View>
  );
}
