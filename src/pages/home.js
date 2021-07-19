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
import { color, jorneyTypeStyle } from "../utils/style";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  min-height: 100%;
  margin: 0 30px;
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
`;

const FilterContainer = styled.div`
  flex-grow: 2;
`;

const TableContainer = styled.div`
  flex-grow: 7;
`;

const FilterTitle = styled.div`
  font-size: 16px;
  font-family: "Gotham Bold";
  color: #3e4157;
  margin-top: 50px;
  margin-bottom: 20px;
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
    <>
      <Navbar />
      <Wrapper>
        <Container>
          <Header />
          <FilterTitle> Jornadas </FilterTitle>

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
                      <td>
                        {jorneyTypeStyle[journey.status].icon({
                          color: jorneyTypeStyle[journey.status].color,
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </TableContainer>
          </Content>
        </Container>
      </Wrapper>
    </>
  );
}
