import styled from "styled-components";

/**
 * 受取ったオブジェクトをカードで囲むコンポーネントとして生きる
 */

export const Card = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};

const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 8px;
  padding: 16px;
`;
