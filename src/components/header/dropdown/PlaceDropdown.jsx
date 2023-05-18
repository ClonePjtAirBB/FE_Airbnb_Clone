import { css, styled } from 'styled-components';
import { forwardRef } from 'react';
import Dropdown from '../../global/Dropdown';
import korMapImg from '../../assets/header-place-korea-map.svg';
import { setPlace } from '../../../modules/filterFormSlice';
import { useDispatch } from 'react-redux';

const PlaceDropdown = forwardRef(({ formselect, formData, selectHandler }, ref) => {
  const dispatch = useDispatch();
  const placeSelectHandler = placeType => {
    dispatch(setPlace(placeType));
    selectHandler('checkIn');
  };

  return (
    <Container ref={ref}>
      <DropdownWrapper dropdownState={formselect === 'place'}>
        <TextLabel>지역으로 검색하기</TextLabel>
        <PlaceContainer>
          {/* TODO: 전체일 경우 이름 결정 안됨 */}
          <PlaceWrapper onClick={() => placeSelectHandler('전체')}>
            <Img
              alt="world map"
              src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg"
            />
            <PlaceText>유연한 검색</PlaceText>
          </PlaceWrapper>
          <PlaceWrapper onClick={() => placeSelectHandler('한국')}>
            <KorImg></KorImg>
            <PlaceText isKor>한국</PlaceText>
          </PlaceWrapper>
          <PlaceWrapper onClick={() => placeSelectHandler('일본')}>
            <Img
              alt="japan map"
              src="https://a0.muscache.com/im/pictures/26891a81-b9db-4a9c-8aab-63486b7e627c.jpg?im_w=320"
            />
            <PlaceText>일본</PlaceText>
          </PlaceWrapper>
        </PlaceContainer>
      </DropdownWrapper>
    </Container>
  );
});

const Container = styled.div`
  position: relative;
`;

const DropdownWrapper = styled(Dropdown)`
  top: 46px;
  left: -250px;
  padding: 32px 50px;
`;

const TextLabel = styled.div`
  margin-bottom: 28px;
  font-size: 14px;
  font-weight: 700;
`;

const PlaceContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 1rem;
`;

const PlaceWrapper = styled.div``;

const KorImg = styled.div`
  width: 122px;
  height: 122px;
  background-image: url(${korMapImg});
  background-repeat: no-repeat;
  background-size: 100px 100px;
  background-color: #f7f7f7;
  background-position: 50%;
  border: 1px solid #dddddd;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    border-color: black;
    transition: 0.5s;
  }
`;

const PlaceText = styled.p`
  margin-top: 9px;
  margin-left: 2px;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${({ isKor }) =>
    isKor &&
    css`
      margin-top: 12px;
    `}
`;

const Img = styled.img`
  width: 122px;
  height: 122px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    border-color: black;
    transition: 0.5s;
  }
`;

export default PlaceDropdown;
