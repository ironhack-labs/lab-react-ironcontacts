
import React from "react";
import Btn from './Button'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  card: {
    width: 345
  },
  margin: {
    margin: theme.spacing(3)
  }
}));

const CardImg = ({ name, popularity, pictureUrl, clickToDelete}) => {
  const classes = useStyles();
  return (
    <div >
      <Card className={classes.margin} width="350">
        <CardActionArea>
          <img src={pictureUrl} alt="avatar" height="140" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {popularity}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Btn size="small" click={clickToDelete}>
            Delete
          </Btn>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardImg;