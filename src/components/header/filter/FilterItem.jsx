import { styled } from 'styled-components';

const FilterItem = ({ option }) => {
  return (
    <Container>
      <IconWarpper>
        <Img src={option.iconUrl} />
      </IconWarpper>
      <TextWrapper>{option.filterValue}</TextWrapper>
    </Container>
  );
};

const Container = styled.span`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  opacity: 0.5;
  cursor: pointer;
  width: 90px;

  &:hover {
    transition: 0.5s;
    opacity: 1;
  }
`;

const IconWarpper = styled.div`
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
`;

const TextWrapper = styled.div`
  font-size: 12px;
  text-align: center;
`;

export default FilterItem;
