import { styled } from 'styled-components';
import SearchIcon from './SearchIcon';

const ScrollFormButton = () => {
  return (
    <Container>
      <Wrapper>
        <button>어디든지</button>
        <Line></Line>
        <button>언제든 일주일</button>
        <Line></Line>
        <button>게스트 추가</button>
        <SearchIcon size="32px" iconSize="12px" />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  cursor: pointer;
`;

const Wrapper = styled.div`
  width: 334.71px;
  height: 48px;

  border: 1px solid #dddddd;
  border-radius: 40px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05);

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  :nth-child(5) {
    color: #717171;
  }
`;

const Line = styled.span`
  height: 24px;
  width: 1px;
  background-color: #dddddd;
`;

export default ScrollFormButton;
