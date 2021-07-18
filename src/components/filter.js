import React from "react";
import styled from "styled-components";
import FilterRow from "./filterRow";
import { Bed, Check, PaperPlane, Pen, PlayCircle, Table } from "./icons";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  font-family: "Gotham Bold";
  font-size: 16px;
`;

export default function Filter() {
  return (
    <Wrapper>
      <FilterRow text="Todas" value="12">
        <Table color="#D190DD" />
      </FilterRow>
      <FilterRow text="Enviando" value="12">
        <PaperPlane color="#C1CA4F" />
      </FilterRow>
      <FilterRow text="Ativadas" value="12">
        <PlayCircle color="#35C667" />
      </FilterRow>
      <FilterRow text="Configurando" value="12">
        <Pen color="#3FA8F4" />
      </FilterRow>
      <FilterRow text="Ociosa" value="12">
        <Bed color="#EBBD3E" />
      </FilterRow>
      <FilterRow text="Concluída" value="12">
        <Check color="#9FABD5" />
      </FilterRow>
    </Wrapper>
  );
}
