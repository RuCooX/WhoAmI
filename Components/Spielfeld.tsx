import React from "react";
import { View } from "react-native";

import { makeStyles } from "@material-ui/core/styles";
import { Paper, ThemeProvider, TextField, Grid, Box, Icon, IconButton } from "@material-ui/core";

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
  playerBox: {
    display: "flex",
    flexWrap: "nowrap",
    background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(22,19,116,1) 50%, rgba(7,7,184,1) 100%)",
  },
  icon: {
    height: "12vh",
    width: "100%",
  },
  iconButton: {
    width: "30vw",
    padding: 0,
  },
  otherPlayer: {
    overflowY: "auto",
    maxHeight: "50vh",
  },
});

export default function Spielfeld() {
  const classes = useStyles();

  return (
    <View style={{ height: "100%" }}>
      <Box className={classes.otherPlayer}>
        <OtherPlayer />
      </Box>
      <Box className={classes.playerBox}>
        <Player />
        <IconButton className={classes.iconButton}>
          <ThumbUpIcon className={classes.icon} style={{ color: "green" }} />
        </IconButton>
        <IconButton className={classes.iconButton}>
          <ThumbDownIcon className={classes.icon} style={{ color: "red" }} />
        </IconButton>
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
