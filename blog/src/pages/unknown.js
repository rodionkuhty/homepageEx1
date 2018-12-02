import React, { PureComponent } from "react";
import styled from "styled-components";
import DontImage from "../img/dont.jpg";

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100vh;

  font-size: 16px;
  font-weight: 800;
  color: white;
  background-image: linear-gradient(19deg, #21d4fd 64%, #b721ff 100%);
`;

export default class Unknown extends PureComponent {
  componentDidMount = () => {
    console.log("mount");
  };

  componentWillUnmount = () => {
    console.log("unmount");
  };

  render = () => {
    return (
      <Container>
        <div>
          <img src={DontImage} alt="dont do it" />
        </div>
      </Container>
    );
  };
}
