import React from "react";
import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { DefauleLayout } from "./components/templetes/DefaultLayout";
import { HeaderOnly } from "./components/templetes/HeaderOnly";
import "./styles.css";

const user = {
  image: "https://source.unsplash.com/ZRZSmK362Xw",
  name: "muto",
  email: "11111@aaa.com",
  phone: "999-9999-9998",
  company: {
    name: "Sample"
  },
  website: "https://www.google.co.jp/"
};

export const App = () => {
  return (
    <BrowserRouter>
      <DefauleLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefauleLayout>
    </BrowserRouter>
  );
};
