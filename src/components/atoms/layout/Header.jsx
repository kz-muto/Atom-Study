import { Link } from "react-router-dom";
import styled from "styled-components";
// Linkを利用する場合は、BrowzRouterで囲む必要があるため、App.jsで囲む。
export const Header = () => {
  return (
    <SHeader>
      <SLink to="/">Home</SLink>
      <SLink to="/users">USERS</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
`;

const SLink = styled(Link)`
  margin: 0 8px;
`;
