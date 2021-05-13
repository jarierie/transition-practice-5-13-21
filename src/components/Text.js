import React from "react";
import styled from "styled-components";

const TextContainer = styled.header`
  font-size: 10rem;
  color: #f5f5f5;
`;

const Text = ({ text }) => {
  return (
    <>
      <TextContainer>{text}</TextContainer>
    </>
  );
};

export default Text;
