import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const Btn = (props) => {
  const classes = useStyles();
  return (
    <Button
      onClick={props.click}
      variant="contained"
      color="secondary"
      className={classes.margin}
    >
      {props.children}
    </Button>
  );
}

export default Btn;