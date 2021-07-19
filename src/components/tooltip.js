import React from "react";
import styled from "styled-components";

const ToolTipWrapper = styled.div`
  position: relative;
  color: #9196ab;
  font-family: "Gotham Bold";
  font-size: 11px;

  font-weight: bold;
  :hover span {
    color: #9196ab;
    opacity: 1;
    transition: opacity 0.5s ease-in;
  }
`;

const ToolTipText = styled.span`
  opacity: 0;
  position: absolute;
  left: 100%;
  padding: 5px;
  opacity: 0;
  transition: opacity 0.5s ease-in;
  border-radius: 6px;
  margin-left: 10px;
  box-shadow: 1px 1px 6px #00000029;
  background: #ffffff;

  ::before {
    content: "";
    position: absolute;
    top: 25%;
    left: -10px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent #fff transparent transparent;
  }
`;
export default function ToolTip({ text, children }) {
  return (
    <ToolTipWrapper>
      <ToolTipText> {text}</ToolTipText>

      {children}
    </ToolTipWrapper>
  );
}
