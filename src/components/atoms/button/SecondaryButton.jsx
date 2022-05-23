import styled from "styled-components";
import { BaseButton } from "./BaseButton";
/**  背景色だけを変更したボタン。
 * 様々なシステムでも、1つのデザインでできているわけではない。
 * */

export const SecondaryButton = (props) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #11999e;
  /*　ここはできれば共通化したいので…
  color: #fff;
  padding: 6px 24px;
  border: none;
  border-radius: 9999px;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }*/
`;
