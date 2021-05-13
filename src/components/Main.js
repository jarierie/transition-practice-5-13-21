import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Text from "./Text";
import Transition from "./Transition";
import { gsap } from "gsap";

const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: #132c33;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = () => {
  const ref = useRef(null);

  //animation
  const animation = () => {
    const tl = gsap.timeline({ delay: 2.5 });
    tl.fromTo(
      ref.current.childNodes[0],
      { opacity: 0, y: 200 },
      { opacity: 1, y: 0 }
    );
  };

  useEffect(() => {
    animation();
  }, []);

  return (
    <>
      <Transition />
      <Container ref={ref}>
        <Text text={"love it if we made it"} />
      </Container>
    </>
  );
};

export default Main;
