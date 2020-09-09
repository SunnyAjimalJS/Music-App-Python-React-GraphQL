import React from "react";
import { ApolloConsumer } from "react-apollo";
import withStyles from "@material-ui/core/styles/withStyles";
import ExitToApp from "@material-ui/icons/ExitToApp";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Signout = ({ classes }) => {
  return (
    <ApolloConsumer>
      <Button>
        <Typography
          variant="body1"
          className={classes.buttonText}
          color="secondary"
        >
          SIGNOUT
        </Typography>
        <ExitToApp className={classes.buttonIcon} color="secondary" />
      </Button>
    </ApolloConsumer>
  );
};

const styles = {
  root: {
    cursor: "pointer",
    display: "flex",
  },
  buttonIcon: {
    marginLeft: "5px",
  },
};

export default withStyles(styles)(Signout);
