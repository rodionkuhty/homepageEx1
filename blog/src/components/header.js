import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Trail, config } from "react-spring";

const HeaderStyle = styled.div`
  width: 100%;
  height:50px
  display: flex;
  justify-content: left;
  align-items: center;
  position:absolute
  
  z-index: 1000;
  
 
`;

// box - shadow: 0px 12px 20px - 5px rgba(0, 0, 0, 0.4);

const Nav = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  padding: 0 7px;
  color: ${({ color }) => color || `black`};
  transition:all .7s :hover {
    color: #fe4b48;
    transition: all 0.7s;
  }
  @media (max-width: 700px) {
    justify-content: left;
  }
`;

const Links = [
  { to: "/", name: "Домой", emojii: "🏠" },
  { to: "/about", name: "Обо мне", emojii: "🤓" },
  { to: "/skills", name: "Знания", emojii: "📚" }
];

const Header = () => (
  <div>
    <HeaderStyle>
      <Trail
        config={config.slow}
        items={Links}
        keys={({ to }) => to}
        from={{ transform: "translate3d(0,-40px,0)" }}
        to={{ transform: "translate3d(0,0px,0)" }}
      >
        {item => props => (
          <Nav
            to={item.to}
            activeStyle={{
              color: "#17A2C0"
            }}
            exact
            style={props}
            blue={"black"}
          >
            {item.emojii}
            {item.name}
          </Nav>
        )}
      </Trail>
    </HeaderStyle>
  </div>
);

export { Header, Nav };
