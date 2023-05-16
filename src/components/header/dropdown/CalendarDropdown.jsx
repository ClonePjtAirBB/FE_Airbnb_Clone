import { forwardRef, useCallback, useEffect } from 'react';
import { styled } from 'styled-components';
import Dropdown from '../../global/Dropdown';
import { DatePicker, useDatePickGetter, useDatePickReset } from '@bcad1591/react-date-picker';

const CalendarDropdown = forwardRef(({ formselect, changeFormData }, ref) => {
  const { pickedDates } = useDatePickGetter();
  const resetFunc = useDatePickReset();

  // const changeFormDataHandler = useCallback(
  //   checkInDate => {
  //     changeFormData('checkIn', checkInDate);
  //     console.log('checkIn!!');
  //   },
  //   [changeFormData]
  // );

  // useEffect(() => {
  //   if (pickedDates.firstPickedDate) {
  //     const checkInDate = `${pickedDates.firstPickedDate.toISOString()}`.slice(0, 10);
  //     changeFormDataHandler(checkInDate);
  //     console.log('useEffect~~');
  //   }
  // }, [changeFormDataHandler]);

  return (
    <Container ref={ref}>
      <DropdownWrapper dropdownState={formselect === 'checkIn'} formselect={formselect}>
        <CalendarContainer>
          <DatePicker disablePreviousDays />

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

export default CalendarDropdown;
