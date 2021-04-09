import React from "react";
import { View } from "react-native";

import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  ThemeProvider,
  TextField,
  Grid,
  Box,
  Icon,
} from "@material-ui/core";

import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

import OtherPlayer from "./Player/otherPlayerComponent";
import Player from "./Player/Player";

const useStyles = makeStyles({
  NoticeBox: {
    alignSelf: "center",
    position: "absolute",
    bottom: "0px",
    marginTop: "1vh",
    marginBottom: "1vh",
  },
  flexBox: {
    display: "flex",
    flexWrap: "wrap",
  },
  icon: {
    height: "12vh",
    width: "30vw",
  },
});

export default function Spielfeld() {
  const classes = useStyles();

  return (
    <View style={{ height: "100%" }}>
      <Box>
        <OtherPlayer />
      </Box>
      <Box className={classes.flexBox}>
        <Player />
        <ThumbUpIcon className={classes.icon} />
        <ThumbDownIcon className={classes.icon} />
      </Box>
      <Box className={classes.NoticeBox} bgcolor="lightblue">
        <TextField
          multiline
          variant="outlined"
          rowsMax={4}
          style={{ height: "100%", width: "98vw" }}
          placeholder="Notizen"
        />
      </Box>
    </View>
  );
}
