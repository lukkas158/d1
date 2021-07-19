import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 20px;
  border: none;
  border-radius: 3px;
  color: white;
  background-color: #117eff;

  span {
    font-size: 13px;
    font-family: "Gotham Bold";
  }

  &:hover {
    background-image: linear-gradient(to left, #117eff, #3fd7fc);
  }
`;

export default function Button({ children, value, ...props }) {
  return (
    <Wrapper {...props}>
      {children}
      <span>{value}</span>
    </Wrapper>
  );
}
