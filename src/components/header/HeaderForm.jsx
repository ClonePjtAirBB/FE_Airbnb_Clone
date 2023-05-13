import { styled } from 'styled-components';

const HeaderForm = ({ isscrolltop, isbuttonnclicked }) => {
  return (
    <FormStyle>
      <Wrapper>
        <PlaceContainer>
          <PlaceWrapper>
            <TextLabel>여행지</TextLabel>
            <TextDesc>여행지 검색</TextDesc>
          </PlaceWrapper>
        </PlaceContainer>
      </Wrapper>

      <Wrapper>
        <PlaceContainer>
          <PlaceWrapper>
            <TextLabel>체크인</TextLabel>
            <TextDesc>날짜 추가</TextDesc>
          </PlaceWrapper>
        </PlaceContainer>
      </Wrapper>

      <Wrapper>
        <PlaceContainer>
          <PlaceWrapper>
            <TextLabel>여행자</TextLabel>
            <TextDesc>게스트 추가</TextDesc>
          </PlaceWrapper>
        </PlaceContainer>
      </Wrapper>
    </FormStyle>
  );
};

const FormStyle = styled.form``;

const Wrapper = styled.div``;

const TextLabel = styled.div``;

const TextDesc = styled.div``;

const PlaceContainer = styled.div``;

const PlaceWrapper = styled.div``;

export default HeaderForm;
