import React from "react";
import { ApolloConsumer } from "react-apollo";
import { gql } from "apollo-boost";

import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import ClearIcon from "@material-ui/icons/Clear";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const SearchTracks = ({ classes }) => {
  const handleSubmit = (event, client) => {};

  return (
    <ApolloConsumer>
      {(client) => (
        <form onSubmit={(event) => handleSubmit(event, client)}>
          <Paper className={classes.root} elevate={1}>
            {/* Clear button */}
            <IconButton>
              <ClearIcon />
            </IconButton>
            {/* Search field  */}
            <TextField
              fullWidth
              placeholder="Search All Tracks"
              InputProps={{
                disableUnderline: true,
              }}
            />
            {/* Search Button */}
            <IconButton type="submit">
              <SearchIcon />
            </IconButton>
          </Paper>
        </form>
      )}
    </ApolloConsumer>
  );
};

const styles = (theme) => ({
  root: {
    padding: "2px 4px",
    margin: theme.spacing.unit,
    display: "flex",
    alignItems: "center",
  },
});

export default withStyles(styles)(SearchTracks);
