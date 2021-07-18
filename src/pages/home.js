import React from "react";
import styled from "styled-components";
import Filter from "../components/filter";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Table from "../components/table";
import { color } from "../utils/style";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  min-height: 100%;
  background-color: ${color.backgroundLight};
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 20px 75px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 35px;
`;

const FilterContainer = styled.div`
  flex-grow: 2;
`;

const TableContainer = styled.div`
  flex-grow: 7;
`;

export default function Home() {
  return (
    <Wrapper>
      <Navbar> Hello </Navbar>
      <Container>
        <Header />
        <Content>
          <FilterContainer>
            <Filter> Filter </Filter>
          </FilterContainer>

          <TableContainer>
            <Table>
              <tbody>
                <tr>
                  <th> Nome </th>
                  <th> Destinatários </th>
                  <th> Sucesso </th>
                  <th> Status </th>
                </tr>

                <tr>
                  <td> Cobrança </td>
                  <td> 210.000 </td>
                  <td> 30%</td>
                  <td> Enviando </td>
                </tr>
              </tbody>
            </Table>
          </TableContainer>
        </Content>
      </Container>
    </Wrapper>
  );
}
