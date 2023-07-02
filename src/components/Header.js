import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

function Header() {
  return (
    <MainHeader>
      <NavLink to="/">
        <img className="logo" src="./images/logoa.png" alt="LOGO" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 6rem;
  }
`;

export default Header;
