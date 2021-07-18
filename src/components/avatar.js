import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 3px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-family: "Gotham Bold";
  font-size: ${(props) => (props.size ? props.size / 2 + "px" : "12px")};
  width: ${(props) => (props.size ? props.size + "px" : "25px")};
  height: ${(props) => (props.size ? props.size + "px" : "25px")};
  border-radius: 50%;
  background-color: ${(props) => props.color || "#9196AB"};
`;

export default function Avatar({ text, ...props }) {
  return <Wrapper {...props}>{text}</Wrapper>;
}
