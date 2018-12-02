import React, { PureComponent, Fragment } from "react";
import styled from "styled-components";
import { Spring, Trail, animated } from "react-spring";
import ParticleEffectButton from "react-particle-effect-button";

import { Nav } from "../components/header";

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
 background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);

`;

const HomeTextDiv = styled.div`
  width: 50vw;
  min-height: 250px;

  background-color: #fff0f0;
  position: absolute;
  top: 200px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const HomeText = styled.p`
  color: #5b6e69;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Source Sans Pro", sans-serif;
  padding: 20px;
  font-size: 18px;
`;

// const HomeIconDiv = styled.div`
//   wi

// `;

// const PageHeaderAnimation = ({ children, fontSize }) => {
//   return (
//     <Spring
//       from={{ opacity: 0, position: "relative", top: "0px" }}
//       to={{
//         opacity: 1,
//         position: "relative",
//         top: "50px",
//         transition: "all ease-in",
//         fontSize: fontSize
//       }}
//     >
//       {props => <div style={props}>{children}</div>}
//     </Spring>
//   );
// };
const items = ["#", "Родю ", "На ", "Стажировку", "!!!"];

class Home extends PureComponent {
  render = () => {
    return (
      <div>
        <Container>
          <HomeTextDiv>
            <Nav to="/about">Обо мне</Nav>
            <Nav to="/skills">Навыки</Nav>
            <HomeText>
              Добрый день. Меня зовут Родион и это мое резюме для стажировки. Я
              как раз ищу стажировку на позицию JS-developer. Если вам стало
              интересно, вы можете почитать обо мне и посмотреть что я умею.
              Спасибище 😉
            </HomeText>
          </HomeTextDiv>
        </Container>
      </div>
    );
  };
}

export { Home };
