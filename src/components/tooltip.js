import React from "react";
import styled from "styled-components";

const ToolTipWrapper = styled.div`
  position: relative;
  color: #9196ab;
  font-family: "Gotham Bold";
  font-size: 11px;

  font-weight: bold;
  :hover span {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.5s ease-in;
  }
`;

const ToolTipText = styled.span`
  opacity: 0;
  transition: opacity 0.5s ease-in;
  position: absolute;
  border-radius: 6px;
  padding: 5px;
  box-shadow: 1px 1px 6px #00000029;
  background: #ffffff 0% 0% no-repeat padding-box;
  top: 50%;
  margin-left: 7px;
  z-index: 1;
`;
export default function ToolTip({ text, children }) {
  return (
    <ToolTipWrapper>
      {children}
      <ToolTipText> {text}</ToolTipText>
    </ToolTipWrapper>
  );
}
