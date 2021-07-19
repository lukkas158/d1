import React from "react";
import styled from "styled-components";
import FilterRow from "./filterRow";
import { jorneyTypeStyle } from "../utils/style";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  font-family: "Gotham Bold";
  font-size: 16px;
`;

export default function Filter({ filters = [], selected, onClick }) {
  return (
    <Wrapper>
      {filters.map((filter) => (
        <FilterRow
          key={filter.id}
          selected={selected == filter.id}
          text={filter.name}
          value={filter.quantity}
          onClick={() => onClick(filter.id)}
        >
          {jorneyTypeStyle[filter.id].icon({
            color: jorneyTypeStyle[filter.id].color,
          })}
        </FilterRow>
      ))}
    </Wrapper>
  );
}
