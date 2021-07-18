import React from "react";
import styled from "styled-components";

const Wrapper = styled.table`
  font-size: 13px;
  border-collapse: separate;
  border-spacing: 0 10px;
  text-align: center;
  width: 100%;
  color: #3e4157;

  td {
    background-color: white;
    padding: 5px 0px;
  }
  td:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  td:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  tr td:first-child {
    font-weight: bold;
  }
  th {
    color: #9196ab;
  }
`;

export default function Table({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
