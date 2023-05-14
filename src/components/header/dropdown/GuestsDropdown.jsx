import { styled } from 'styled-components';
import Dropdown from '../../global/Dropdown';
import GuestList from './GuestList';
import { forwardRef } from 'react';

const GuestsDropdown = forwardRef(({ formselect, formData }, ref) => {
  return (
    <Container ref={ref}>
      <DropdownWrapper dropdownState={formselect === 'guests'}>
        <GuestsUl>
          <GuestList label="성인" description="만 13세 이상" />
          <GuestList label="어린이" description="만 2~12세" />
          <GuestList label="유아" description="만 2세 미만" />
          <GuestList label="반려동물" description="보조동물을 동반하시나요?" />
        </GuestsUl>
      </DropdownWrapper>
    </Container>
  );
});

const Container = styled.div`
  position: relative;
`;

const DropdownWrapper = styled(Dropdown)`
  top: 46px;
  right: 0px;
  padding: 20px 32px;
  min-width: 360px;
`;

const GuestsUl = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export default GuestsDropdown;
