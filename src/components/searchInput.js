import React from "react";
import styled from "styled-components";
import { VscSearch } from "react-icons/vsc";

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  border: 1px solid #cccfde;
  align-items: center;
  border-radius: 5px;
  max-width: 296px;

  &:hover {
    box-shadow: 0px 5px 10px -4px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.5s ease-in;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
`;

const Icon = styled.i`
  font-size: 11px;
  color: #117eff;
  padding: 5px;
`;

export default function SearchInput() {
  return (
    <Wrapper>
      <Icon>
        <VscSearch />
      </Icon>

      <Input placeholder="Buscar" type="text" />
    </Wrapper>
  );
}
