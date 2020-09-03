import React, { useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";

const Error = ({ classes, error }) => {
  return <Snackbar className={classes.snackbar} message={error.message} />;
};

const styles = (theme) => ({
  snackbar: {
    margin: theme.spacing.unit,
  },
});

export default withStyles(styles)(Error);
