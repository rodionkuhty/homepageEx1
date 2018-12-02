import React, { PureComponent } from "react";
import styled from "styled-components";

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100vh;
  position:relative
  color: white;
  background-color: #4158d0;
  background-image: linear-gradient(
    90deg,
    #ff9a8b 0%,
    #ff6a88 55%,
    #ff99ac 100%
  );
`;

//background-image: url(${BackGround});

export default class Contacts extends PureComponent {
  componentDidMount = () => {
    console.log("mount");
  };

  componentWillUnmount = () => {
    console.log("unmount");
  };

  render = () => {
    return (
      <Container>
        <h1>Skills</h1>
      </Container>
    );
  };
}
