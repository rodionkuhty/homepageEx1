import React from "react";
import styled from "styled-components";
import { Transition } from "react-spring";
import Toggle from "../hoc/toggle";

const SideNavStyle = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);

  position: absolute;
  z-index: 2000;
  @media (min-width: 700px) {
    display: none;
  }
`;
const CloseIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  width: 20px;
  height: 20px;

  cursor: pointer;
`;

const SideNav = ({ children, toggle, ...rest }) => (
  <SideNavStyle>
    <CloseIcon onClick={toggle}>Close</CloseIcon>
    {children}
  </SideNavStyle>
);

export default SideNav;
