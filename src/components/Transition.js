import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const TransitionContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
`;

const Panels = styled.div`
  width: 20vw;
  height: 100vh;
  border: 1px solid black;
  border-top: none;
  border-bottom: none;
  display: inline-block;
  background-color: #0d0d0d;
`;

const Transition = () => {
  const ref = useRef(null);
  const numberOfPanels = 5;
  let arr = [];
  let i = 0;
  for (i = 0; i < numberOfPanels; i++) {
    arr.push(i);
  }

  //animation

  const animation = () => {
    const tl = gsap.timeline({ delay: 0.3 });
    tl.to(ref.current.childNodes, { height: 0, stagger: 0.2, duration: 1 });
  };

  useEffect(() => {
    animation();
  }, []);

  return (
    <>
      <TransitionContainer ref={ref}>
        {arr.map(() => {
          return (
            <>
              <Panels></Panels>
            </>
          );
        })}
      </TransitionContainer>
    </>
  );
};

export default Transition;
