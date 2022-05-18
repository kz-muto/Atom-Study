import React from "react";
import { PrimaryButton } from "./components/button/PrimaryButton";
import { SecondaryButton } from "./components/button/SecondaryButton";
import "./styles.css";

export const App = () => {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
    </div>
  );
};
