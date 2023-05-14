import { css, styled } from 'styled-components';
import SearchIcon from './SearchIcon';

const HeaderForm = ({
  isscrolltop,
  isbuttonnclicked,
  formselect,
  headerRefs,
  selectHandler,
  formData,
}) => {
  const {
    formRef,
    placeWrapperRef,
    placeDropdownRef,
    checkInWrapperRef,
    checkInDropdownRef,
    checkOutWrapperRef,
    checkOutDropdownRef,
    calendarDropdownRef,
    guestWrapperRef,
    guestDropdownRef,
  } = headerRefs;

  const { place, checkIn, checkOut, guests } = formData;

  // TEST CODE
  console.log('HeaderForm rendering');

  return (
    <FormStyle ref={formRef} isbuttonnclicked={isbuttonnclicked}>
      <Wrapper
        ref={placeWrapperRef}
        name="place"
        formselect={formselect}
        width="30%"
        onClick={() => selectHandler('place')}
        tabIndex="1"
      >
        <PlaceContainer>
          <TextWrapper>
            <TextLabel>여행지</TextLabel>
            <TextDesc value={place}>여행지 검색</TextDesc>
          </TextWrapper>
        </PlaceContainer>
      </Wrapper>

      <Wrapper
        ref={checkInWrapperRef}
        name="checkIn"
        formselect={formselect}
        width="20%"
        tabIndex="2"
      >
        <TextWrapper>
          <TextLabel>체크인</TextLabel>
          <TextDesc value={checkIn}>{checkIn || '날짜 추가'}</TextDesc>
        </TextWrapper>
      </Wrapper>

      <Wrapper
        ref={checkOutWrapperRef}
        name="checkOut"
        formselect={formselect}
        width="20%"
        tabIndex="3"
      >
        <TextWrapper>
          <TextLabel>체크아웃</TextLabel>
          <TextDesc value={checkOut}>{checkOut || '날짜 추가'}</TextDesc>
        </TextWrapper>
      </Wrapper>

      <Wrapper ref={guestWrapperRef} name="guests" formselect={formselect} width="30%" tabIndex="4">
        <TextWrapper>
          <TextLabel>여행자</TextLabel>
          <TextDesc>게스트 추가</TextDesc>
        </TextWrapper>
        <IconContainer>
          <SearchIcon size="48px" iconSize="16px" />
        </IconContainer>
      </Wrapper>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  position: relative;
  background-color: white;
  width: 100%;
  height: 66px;
  border-radius: 34px;
  align-items: center;

  border: 1px solid #dddddd;

  display: ${({ isbuttonnclicked }) => (isbuttonnclicked === 'true' ? 'flex' : 'none')};
`;

const TextWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 36px;
`;

const Wrapper = styled.div`
  position: relative;
  width: ${({ width }) => width};
  height: 68px;
  display: flex;
  align-items: center;
  cursor: pointer;

  margin-top: -1px;
  outline: none;

  &:not(:first-child) ${TextWrapper}::before {
    content: '';
    position: absolute;
    top: 0;
    left: -20px;
    display: block;
    height: 100%;
    width: 1px;
    background-color: #dddddd;
  }

  ${({ formselect, name }) =>
    !(formselect === 'checkIn' && name === 'checkOut') &&
    css`
      &:hover {
        background: rgba(0, 0, 0, 0.07);
        border-radius: 34px;
        margin-top: -1px;
        height: 66px;
        ${TextWrapper}::before {
          display: none;
        }
      }

      &:hover + & {
        ${TextWrapper}::before {
          display: none;
        }
      }
    `}

  &:focus-within {
    background-color: white;
    border-radius: 34px;
    height: 66px;
    margin-top: -1px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    ${TextWrapper}::before {
      display: none;
    }
    button {
      display: inline-flex;
    }
  }

  &:focus-within + & {
    ${TextWrapper}::before {
      display: none;
    }
  }

  ${({ name }) =>
    name === 'place' ||
    css`
      padding-left: 20px;
    `}
`;

const TextLabel = styled.div`
  font-size: 12px;
  line-height: 18px;
  font-weight: bold;
`;

const TextDesc = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: #717171;
`;

const PlaceContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 28px;

  &:focus-within {
    background: white;
    border-radius: 34px;
    & ${TextWrapper}::before {
      display: none;
    }
  }
`;

const IconContainer = styled.div`
  padding-right: 5px;
`;

export default HeaderForm;
