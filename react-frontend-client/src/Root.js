import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import withRoot from "./withRoot";
import App from "./pages/App";
import Profile from "./pages/Profile";

const Root = () => (
  <Query query={GET_ME_QUERY}>
    {({ data, loading, error }) => {
      if (loading) return <div>Loading..</div>;
      if (error) return <div>Error</div>;

      return (
        <Router>
          <Route path="/" component={App} />
          <Route path="/profile/:id" component={Profile} />
        </Router>
      );
    }}
  </Query>
);

const GET_ME_QUERY = gql`
  {
    me {
      id
      username
      email
    }
  }
`;

// const GET_TRACKS_QUERY = gql`
//   {
//     tracks {
//       id
//       title
//       description
//       url
//     }
//   }
// `;

export default withRoot(Root);
