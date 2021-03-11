import React, { FC, ReactElement } from "react";
import { View } from "react-native";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, CardContent, Divider, Card } from "@material-ui/core/";

const useStyles = makeStyles({
  userName: {
    color: "black",
  },
  character: {
    color: "red",
  },
  cardContent: {
    backgroundColor: "lightgray",
  },
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
    <View>
      <Card>
        <CardContent className={classes.cardContent}>
          <Typography className={classes.userName}>{spielerName}</Typography>
          <Divider variant="middle" />
          <Typography className={classes.character}>{characterName}</Typography>
        </CardContent>
      </Card>
    </View>
  );
};
export default Mitspieler;
