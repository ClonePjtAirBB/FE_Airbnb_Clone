import { styled } from 'styled-components';
import FilterItem from './FilterItem';
import { filterOptions } from '../../shared/filterOptions';

const Filter = () => {
  return (
    <Container>
      {filterOptions.map(option => (
        <FilterItem key={option.id} option={option} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  z-index: 99;
  position: fixed;
  background-color: white;
  width: 100%;
  height: 110px;
  top: 10%;

  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  padding: 0 80px;
`;

export default Filter;
