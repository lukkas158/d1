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
  height: 100%;
  width: 7%;
  border-top: 3px solid;
  border-bottom: 3px solid;
  border-left-width: 0;
  border-right-width: 0;
  border-image: linear-gradient(to right, #00e1ff, #117eff) 1;
`;

const TopSection = styled.div``;

const BottomSection = styled.div``;

const IconWapper = styled.div`
  display: flex;
  margin: 20px 0px;
  flex-direction: column;
`;

export default function Navbar() {
  return (
    <Wrapper>
      <TopSection>
        <IconWapper>
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
        </IconWapper>
        <Divider />
        <IconWapper>
          <ToolTip text={"Versão 01"}>
            <ExternalLinkSquareAlt />
          </ToolTip>
        </IconWapper>
      </TopSection>
      <BottomSection>
        <IconWapper>
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
        </IconWapper>
      </BottomSection>
    </Wrapper>
  );
}
