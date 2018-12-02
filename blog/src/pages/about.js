import React, { PureComponent } from "react";
import styled from "styled-components";
import { Spring, Transition } from "react-spring";

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  width: 100%;
  height: 100vh;
  position:relative
  color: white;
  background-color: #4158d0;
  background-image: linear-gradient(90deg, #fee140 0%, #fa709a 100%);
`;

const TechColon = styled.div`
  width: 50%;
  height: 20%;
  border: 1px solid red;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export default class About extends PureComponent {
  componentDidMount = () => {
    console.log("mount");
  };

  componentWillUnmount = () => {
    console.log("unmount");
  };

  render = () => {
    return (
      <Container>
        <TechColon>
          <p>wow</p>
        </TechColon>
        <TechColon>
          <p>wow2</p>
        </TechColon>
        <TechColon>
          <p>wow3</p>
        </TechColon>
      </Container>
    );
  };
}
