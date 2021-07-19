import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Filter from "../components/filter";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Table from "../components/table";
import {
  fetchFilters,
  selectFilters,
  setSelected,
} from "../store/reducers/filterReducer";
import {
  fetchJourneys,
  selectJourneys,
} from "../store/reducers/journeyReducer";
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
  const dispatch = useDispatch();
  const journeys = useSelector(selectJourneys);
  const { filters, selected } = useSelector(selectFilters);

  useEffect(() => dispatch(fetchJourneys()), []);
  useEffect(() => dispatch(fetchFilters()), []);

  function filter(id) {
    dispatch(setSelected(id));
    dispatch(fetchJourneys(id));
  }
  return (
    <Wrapper>
      <Navbar> Hello </Navbar>
      <Container>
        <Header />
        <Content>
          <FilterContainer>
            <Filter onClick={filter} filters={filters} selected={selected} />
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

                {journeys.map((journey) => (
                  <tr key={journey.id}>
                    <td> {journey.name} </td>
                    <td> {journey.recipients}</td>
                    <td> {journey.success}</td>
                    <td> {journey.status} </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </TableContainer>
        </Content>
      </Container>
    </Wrapper>
  );
}
