import React from "react";
import styled from "styled-components";
import { Transition, animated } from "react-spring";
import { Route } from "react-router-dom";

const Container = styled(animated.div)`
  position: absolute;
  width: 100%;
`;

const AnimatedRoute = ({ children }) => (
  <Route
    render={({ location }) => (
      <Transition
        native
        items={location}
        keys={location => location.pathname}
        from={{
          opacity: 0
        }}
        enter={{ opacity: 1 }}
        leave={{
          opacity: 0,

          pointerEvents: "none"
        }}
      >
        {location => style => (
          <Container style={style}>{children(location)}</Container>
        )}
      </Transition>
    )}
  />
);

//rotate
// from = {{ opacity: 0, transform: 'perspective(900px) rotateY(180deg)' }}
// enter = {{ opacity: 1, transform: 'perspective(900px) rotateY(0deg)' }}
// leave = {{ opacity: 0, transform: 'perspective(900px) rotateY(-180deg)', pointerEvents: 'none' }}>

export default AnimatedRoute;
