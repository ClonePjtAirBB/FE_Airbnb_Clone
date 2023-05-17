import { styled } from 'styled-components';
import FilterItem from './FilterItem';
import { filterOptions } from '../../../shared/filterOptions';
import { useDispatch, useSelector } from 'react-redux';
import { setFormData } from '../../../modules/filterForm';
import { getFilteredList } from '../../../apis/stayList';

const Filter = ({ getStayTypeFilteredHandler }) => {
  const formData = useSelector(state => state.filterForm);
  const dispatch = useDispatch();

  const clickFilterHandler = (value, queryString) => {
    const data = { name: 'stayType', value };
    dispatch(setFormData(data));
    getStayTypeFilteredHandler(queryString);
  };

  console.log(formData);

  return (
    <Container>
      {filterOptions.map(option => (
        <FilterItem key={option.id} option={option} clickFilterHandler={clickFilterHandler} />
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
