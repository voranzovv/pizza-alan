import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 150,
  },
  media: {
    height: 150,
  },
});

export default function MediaCard({ imgUrl, itemName }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imgUrl}
          title={itemName}
        />
        <CardContent>
          <Typography gutterBottom>{itemName}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
