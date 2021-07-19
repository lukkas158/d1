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

const Section = styled.div`
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  margin-left: 20px;
  max-height: 24px;
`;

const InputWrapper = styled.div`
  margin-right: 5px;
`;

export default function Header() {
  return (
    <Wrapper>
      <Section>
        <Avatar color="#117EFF" text="A"></Avatar>
        <Logo src={logo} />
      </Section>
      <Section>
        <InputWrapper>
          <SearchInput />
        </InputWrapper>

        <Button value={"Nova Jornada"}>
          <Plus />
        </Button>
      </Section>
    </Wrapper>
  );
}
