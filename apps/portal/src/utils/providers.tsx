"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "redux-store/store";

export const Providers = ({ children }: { children: React.JSX.Element }) => {
  return <Provider store={store}>{children}</Provider>;
};
