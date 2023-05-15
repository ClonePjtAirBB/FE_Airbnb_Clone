import { styled } from 'styled-components';
import Dropdown from '../../global/Dropdown';
import GuestList from './GuestList';
import { forwardRef } from 'react';

const GuestsDropdown = forwardRef(
  ({ formselect, formData, addGuestCount, decreaseGuestCount }, ref) => {
    const { guests } = formData;
    const { adult, children, infant, pet } = guests;

    // TODO: GuestList 배열-객체로 만든 후 map 돌려서 중복 줄이기

    return (
      <Container ref={ref}>
        <DropdownWrapper dropdownState={formselect === 'guests'}>
          <GuestsUl>
            <GuestList
              label="성인"
              description="만 13세 이상"
              addGuestCount={addGuestCount}
              decreaseGuestCount={decreaseGuestCount}
              guests={guests}
              adult={adult}
            />
            <GuestList
              label="어린이"
              description="만 2~12세"
              addGuestCount={addGuestCount}
              decreaseGuestCount={decreaseGuestCount}
              guests={guests}
              children={children}
            />
            <GuestList
              label="유아"
              description="만 2세 미만"
              addGuestCount={addGuestCount}
              decreaseGuestCount={decreaseGuestCount}
              guests={guests}
              infant={infant}
            />
            <GuestList
              label="반려동물"
              description="보조동물을 동반하시나요?"
              addGuestCount={addGuestCount}
              decreaseGuestCount={decreaseGuestCount}
              guests={guests}
              pet={pet}
            />
          </GuestsUl>
        </DropdownWrapper>
      </Container>
    );
  }
);

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
