import { styled } from 'styled-components';
import { FiPlus, FiMinus } from 'react-icons/fi';

const GuestList = ({ label, description }) => {
  return (
    <GuestLi>
      <TextWrapper>
        <TextLabel>{label}</TextLabel>
        <TextDescription>{description}</TextDescription>
      </TextWrapper>

      <CounterContainer>
        <CountButton>
          <FiMinus />
        </CountButton>

        <GuestsCountContainer>1</GuestsCountContainer>

        <CountButton>
          <FiPlus />
        </CountButton>
      </CounterContainer>
    </GuestLi>
  );
};

const GuestLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
  width: 100%;
  &:not(:last-child) {
    border-bottom: 1px solid #ebebeb;
  }
`;

const TextWrapper = styled.div``;

const TextLabel = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const TextDescription = styled.p`
  font-size: 14px;
  color: #717171;
`;

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CountButton = styled.button`
  border: 1px solid #dddddd;
  color: #717171;
  border-radius: 50%;
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: black;
    border-color: black;
  }
`;

const GuestsCountContainer = styled.span``;

export default GuestList;
