import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/input";
import styled from "styled-components";
import { memo } from "react";

export const SearchInput = memo(() => {
  return (
    <SContainer>
      {/* placeholder:検索ボックスの裏に写す */}
      <Input placeholder="あああ"></Input>
      <SButtonWrapper>
        {/* <input placeholder="検索条件を入力" /> */}
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
});

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
