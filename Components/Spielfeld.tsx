import React from "react";
import { View } from "react-native";

import { makeStyles } from "@material-ui/core/styles";
import { Paper, ThemeProvider, TextField, Grid, Box } from "@material-ui/core";

import OtherPlayer from "./Player/otherPlayerComponent";
import PlayerCard from "./Player/PlayerCard";
import Player from "./Player/Player";

const useStyles = makeStyles({
  NoticeBox: {
    alignSelf: "center",
    position: "absolute",
    bottom: "0px",
    marginTop: "1vh",
    marginBottom: "1vh",
  },
  Notice: {},
});

export default function Spielfeld() {
  const classes = useStyles();

  return (
    <View style={{ height: "100%" }}>
      <Box>
        <OtherPlayer />
      </Box>
      <Box>
        <Player />
      </Box>
      <Box className={classes.NoticeBox} bgcolor="lightblue">
        <TextField
          multiline
          variant="outlined"
          rowsMax={4}
          className={classes.Notice}
          style={{ height: "100%", width: "98vw" }}
          placeholder="Notizen"
        />
      </Box>
    </View>
  );
}
