import React from "react";
import styled from "styled-components";
import Avatar from "./avatar";
import logo from "../assets/images/acme-logo.png";
import SearchInput from "./searchInput";
import Button from "./button";
import { Plus } from "./icons";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
`;

const LeftSide = styled.div`
  display: flex;
  color: white;
`;

const RightSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  margin-right: 20px;
`;

const Logo = styled.img`
  margin-left: 20px;
  max-height: 24px;
`;

export default function Header() {
  return (
    <Wrapper>
      <LeftSide>
        <Avatar color="#117EFF" text="A"></Avatar>
        <Logo src={logo} />
      </LeftSide>
      <RightSide>
        <InputContainer>
          <SearchInput />
        </InputContainer>
        <Button value={"Nova Jornada"}>
          <Plus />
        </Button>
      </RightSide>
    </Wrapper>
  );
}
