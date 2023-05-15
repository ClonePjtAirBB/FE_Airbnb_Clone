import { styled, css } from 'styled-components';
import { FiPlus, FiMinus } from 'react-icons/fi';

const GuestList = ({
  label,
  description,
  addGuestCount,
  decreaseGuestCount,
  guests,
  adult,
  children,
  infant,
  pet,
  stcount,
}) => {
  let guestsCountValue;
  switch (label) {
    case '성인':
      guestsCountValue = adult;
      break;
    case '어린이':
      guestsCountValue = children;
      break;
    case '유아':
      guestsCountValue = infant;
      break;
    case '반려동물':
      guestsCountValue = pet;
      break;
    default:
      guestsCountValue = 0;
      break;
  }

  const minusButtonClickHandler = e => {
    e.preventDefault();
    if (guestsCountValue === 0) return;
    else {
      switch (label) {
        case '성인':
          decreaseGuestCount(guests, 'adult');
          break;
        case '어린이':
          decreaseGuestCount(guests, 'children');
          break;
        case '유아':
          decreaseGuestCount(guests, 'infant');
          break;
        case '반려동물':
          decreaseGuestCount(guests, 'pet');
          break;
        default:
          break;
      }
    }
  };

  const plusButtonClickHanlder = e => {
    e.preventDefault();
    switch (label) {
      case '성인':
        addGuestCount(guests, 'adult');
        break;
      case '어린이':
        addGuestCount(guests, 'children');
        break;
      case '유아':
        addGuestCount(guests, 'infant');
        break;
      case '반려동물':
        addGuestCount(guests, 'pet');
        break;
      default:
        break;
    }
  };

  return (
    <GuestLi>
      <TextWrapper>
        <TextLabel>{label}</TextLabel>
        <TextDescription>{description}</TextDescription>
      </TextWrapper>

      <CounterContainer>
        <CountButton onClick={minusButtonClickHandler} stcount={stcount} minus>
          <FiMinus />
        </CountButton>

        <GuestsCountContainer>{guestsCountValue}</GuestsCountContainer>

        <CountButton onClick={plusButtonClickHanlder}>
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

  ${({ stcount, minus }) =>
    minus &&
    !stcount &&
    css`
      border-color: #ebebeb;
      color: #ebebeb;
      cursor: not-allowed;
      &:hover {
        border-color: #ebebeb;
        color: #ebebeb;
      }
    `}
`;

const GuestsCountContainer = styled.span`
  width: 15px;
  display: flex;
  justify-content: center;
`;

export default GuestList;
