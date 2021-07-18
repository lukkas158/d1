import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Gotham Bold";
  font-weight: bold;
  padding: 3px 20px;
  border: none;
  border-radius: 3px;
  color: white;
  background-color: #117eff;
`;

export default function Button({ children, value, ...props }) {
  return (
    <Wrapper {...props}>
      {children}
      <span>{value}</span>
    </Wrapper>
  );
}
