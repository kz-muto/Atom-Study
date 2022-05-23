import React from "react";
import { RecoilRoot } from "recoil";
import { UserProvider } from "./providers/UserProvider";
import { Router } from "./Router/Router";
import "./styles.css";

export const App = () => {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
};
