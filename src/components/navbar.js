import React from "react";
import styled from "styled-components";
import { color } from "../utils/style";

const Wrapper = styled.nav`
  background-color: ${color.backgroundDarkPrimary};
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 8%;
`;

export default function Navbar() {
  return <Wrapper></Wrapper>;
}
