import React, { FC, ReactElement } from "react";
import theme from "../../theme";

import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  CardContent,
  Divider,
  Card,
  ThemeProvider,
} from "@material-ui/core/";

const useStyles = makeStyles({
  userName: {
    color: "black",
  },
  character: {
    color: "red",
  },
  cardContent: {},
  card: { height: "15vh", width: "15vh", margin: "1vh" },
});

type Props = {
  spielerName: string;
  characterName: string;
};
const Mitspieler: FC<Props> = ({
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
export default Mitspieler;
