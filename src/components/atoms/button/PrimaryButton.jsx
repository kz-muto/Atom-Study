// import モジュール名　from ファイル(パッケージ)名
import styled from "styled-components";
import { BaseButton } from "./BaseButton";

/**  コンポーネントの役割を意識。
 *   画面の主となるボタンのデザインを受け持つ。
 * 　→言葉を受取って表示できるようにしたい
 * 　イメージ <PrimaryBUtton />で使えるようにしたい。
 */

export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

/**
 * 記法思い出し。
 */
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
