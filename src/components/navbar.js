import React from "react";
import styled from "styled-components";
import { color } from "../utils/style";
import Divider from "./divider";

import {
  ChartPie,
  Rocket,
  UserFriends,
  CCMCloud,
  ExternalLinkSquareAlt,
  GemSolid,
  Tools,
  Exchange,
  SignOut,
} from "./icons";
import ToolTip from "./tooltip";

const Wrapper = styled.nav`
  background-color: ${color.backgroundDarkPrimary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 7%;
  max-width: 71px;
  border-top: 3px solid;
  border-bottom: 3px solid;
  border-left-width: 0;
  border-right-width: 0;
  border-image: linear-gradient(to right, #00e1ff, #117eff) 1;
`;

const Section = styled.div`
  > * {
    margin: 15px;
    color: #e4e6f1;
  }

  > *:hover {
    color: blue;
  }
`;

export default function Navbar() {
  return (
    <Wrapper>
      <Section>
        <ToolTip text={"Análises"}>
          <ChartPie />
        </ToolTip>

        <ToolTip text={"Jornadas"}>
          <Rocket />
        </ToolTip>

        <ToolTip text={"Clientes"}>
          <UserFriends />
        </ToolTip>
        <ToolTip text={"CCM Cloud"}>
          <CCMCloud />
        </ToolTip>

        <Divider />

        <ToolTip text={"Versão 01"}>
          <ExternalLinkSquareAlt />
        </ToolTip>
      </Section>
      <Section>
        <ToolTip text={"Administração"}>
          <GemSolid />
        </ToolTip>

        <ToolTip text={"Help Desk"}>
          <Tools />
        </ToolTip>

        <ToolTip text={"Trocar Conta"}>
          <Exchange />
        </ToolTip>

        <ToolTip text={"Sair"}>
          <SignOut />
        </ToolTip>
      </Section>
    </Wrapper>
  );
}
