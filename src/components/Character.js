import React from "react";
import { Card, makeStyles, CardContent, Typography } from "@material-ui/core";

const useStyle = makeStyles({
  img: {
    height: 300,
    width: "100%",
    objectFit: "cover",
  },
});

const Character = ({ item }) => {
  const classes = useStyle();

  return (
    <Card>
      <img src={item.img} className={classes.img} alt="character" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {item.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Occupation: {item.occupation}
          <br />
          DOB: {item.birthday}
          <br />
          Status: {item.status}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Character;
