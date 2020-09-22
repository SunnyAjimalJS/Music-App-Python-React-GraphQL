import React, { useContext } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

import IconButton from "@material-ui/core/IconButton";
import TrashIcon from "@material-ui/icons/DeleteForeverOutlined";

import { UserContext } from "../../Root";

const DeleteTrack = ({ track }) => {
  const currentUser = useContext(UserContext);
  const isCurrentUser = currentUser.id === track.postedBy.id;

  return isCurrentUser && <Mutation></Mutation>;
};

export default DeleteTrack;
