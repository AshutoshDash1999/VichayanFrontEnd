import React, { useEffect } from "react";
import { getAllConnections } from "../Redux/actions/connections/connectionAction";
import { store } from "../Redux/store";
export default function CheckAuth() {
  const checkSession = () => {
    store.dispatch(getAllConnections());
  };
  useEffect(() => {
    checkSession();
  }, []);
  return null;
}
