import React from "react";
import { AppContext } from "../context/app-context";

export default function useAuth() {
  const { state, actions, dispatch } = React.useContext(AppContext);
  const isAuthenticated = state.auth?.is_authenticated;
  const user = state.auth?.user;

  return {
    isAuthenticated,
    user,
    actions ,
    dispatch: dispatch!,
  };
}
