import React, { FC, ReactElement } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, CardContent, Divider, Card } from "@material-ui/core/";

const useStyles = makeStyles({
  userName: {
    color: "black",
    overflowX: "auto",
    whiteSpace: "nowrap",
    textOverflow: "unset",
  },
  character: {
    color: "red",
    overflowX: "auto",
    whiteSpace: "nowrap",
    textOverflow: "unset",
  },
  cardContent: {},
  card: {
    height: "5em",
    width: "10em",
    margin: "1vh",
    backgroundColor: "lightblue",
    textAlign: "center",
  },
});

type Props = {
  spielerName: string;
  characterName: string;
};
const PlayerCard: FC<Props> = ({
  spielerName,
  characterName,
}): ReactElement => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.userName}>{spielerName}</Typography>
        <Divider variant="middle" />
        <Typography className={classes.character}>{characterName}</Typography>
      </CardContent>
    </Card>
  );
};
export default PlayerCard;
