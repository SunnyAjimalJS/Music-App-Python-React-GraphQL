import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import withRoot from "./withRoot";

const Root = () => (
  <Query query={GET_ME_QUERY}>
    {({ data, loading, error }) => {
      if (loading) return <div>Loading..</div>;
      if (error) return <div>Error</div>;

      return <div>{JSON.stringify(data)}</div>;
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
