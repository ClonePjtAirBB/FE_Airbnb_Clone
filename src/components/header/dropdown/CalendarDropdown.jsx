import { forwardRef, useCallback, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Dropdown from '../../global/Dropdown';
import { DatePicker, useDatePickGetter, useDatePickReset } from '@bcad1591/react-date-picker';
import React from 'react';

const CalendarDropdown = forwardRef(({ formselect, changeFormData, selectHandler }, ref) => {
  const [isCheckInClicked, setIsCheckInClicked] = useState(false);
  const [isCheckOutClicked, setIsCheckOutClicked] = useState(false);
  const { pickedDates } = useDatePickGetter();
  const resetFunc = useDatePickReset();

  if (pickedDates.firstPickedDate && isCheckInClicked === false) {
    setIsCheckInClicked(true);
  }
  if (pickedDates.secondPickedDate && isCheckOutClicked === false) {
    setIsCheckOutClicked(true);
  }

  useEffect(() => {
    if (pickedDates.firstPickedDate) {
      // TODO: 한국 시간과 하루 차이가 있어 조정 필요
      const checkInDate = `${pickedDates.firstPickedDate.toISOString()}`.slice(0, 10);
      changeFormData('checkIn', checkInDate);
      selectHandler('checkOut');
    }
  }, [isCheckInClicked]);

  useEffect(() => {
    if (pickedDates.secondPickedDate) {
      // TODO: 한국 시간과 하루 차이가 있어 조정 필요
      const checkOutDate = `${pickedDates.secondPickedDate.toISOString()}`.slice(0, 10);
      changeFormData('checkOut', checkOutDate);
      selectHandler('guests');
    }
  }, [isCheckOutClicked]);

  return (
    <Container ref={ref}>
      <DropdownWrapper
        dropdownState={formselect === 'checkIn' || formselect === 'checkOut'}
        formselect={formselect}
      >
        <CalendarContainer>
          <DatePicker disablePreviousDays />
          {/* <div>{pickedDates.firstPickedDate?.toString()}</div> */}

          {/* <div>{pickedDates.firstPickedDate?.toString()}</div>
          <div>{pickedDates.secondPickedDate?.toString()}</div>
          <button type="button" onClick={resetFunc}>
            Reset
          </button> */}
        </CalendarContainer>
      </DropdownWrapper>
    </Container>
  );
});

const Container = styled.div`
  position: relative;
`;

const DropdownWrapper = styled(Dropdown)`
  top: 15px;
  left: -520px;
  padding: 32px 50px;
`;

const CalendarContainer = styled.div``;

export default React.memo(CalendarDropdown);
