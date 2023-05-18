import HeaderForm from './HeaderForm';
import useHeaderRef from '../../hooks/useHeaderRef';
import { useEffect, useRef, useState, useCallback } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGuests } from '../../modules/filterFormSlice';

const HeaderFormContainer = ({ isscrolltop, isbuttonnclicked }) => {
  // 현재 선택 영역
  const [formselect, setFormSelect] = useState(null);
  const headerRefs = useHeaderRef();
  const latestSelect = useRef(formselect);
  // redux filter form 데이터
  const formData = useSelector(state => state.filterFormSlice);

  const dispatch = useDispatch();

  const { place, checkIn, checkOut, guests } = formData;

  latestSelect.current = formselect;

  // 선택 영역 (select: string)로 변경
  const selectHandler = select => {
    setFormSelect(select);
  };

  // 필터 선택 이후 다음 필터로 active 포커스 변경
  const changeFocus = () => {
    // if (latestSelect.current === 'place') headerRefs.placeWrapperRef.current.focus();
    if (latestSelect.current === 'checkIn') headerRefs.checkInWrapperRef.current.focus();
    else if (latestSelect.current === 'checkOut') headerRefs.checkOutWrapperRef.current.focus();
    else if (latestSelect.current === 'guests') headerRefs.guestWrapperRef.current.focus();
  };

  const formClickBeforeDropdownHandler = useCallback(
    ({ target }) => {
      switch (true) {
        case headerRefs.placeWrapperRef.current &&
          headerRefs.placeWrapperRef.current.contains(target):
          selectHandler('place');
          break;
        case headerRefs.checkInWrapperRef.current.contains(target):
          selectHandler('checkIn');
          break;
        case headerRefs.checkOutWrapperRef.current.contains(target):
          selectHandler('checkOut');
          break;
        case headerRefs.guestWrapperRef.current.contains(target):
          selectHandler('guests');
          break;
        case latestSelect.current && !headerRefs.formRef.current.contains(target):
          selectHandler(null);
        default:
          break;
      }
    },
    [latestSelect.current]
  );

  const addGuestCount = (guestsData, guestsType) => {
    let { adult, children, infant, pet } = guestsData;
    if (guestsType === 'adult') adult++;
    if (guestsType === 'children') children++;
    if (guestsType === 'infant') infant++;
    if (guestsType === 'pet') pet++;

    const countValue = { adult, children, infant, pet };
    dispatch(setGuests(countValue));
  };

  const decreaseGuestCount = (guestsData, guestType) => {
    let { adult, children, infant, pet } = guestsData;
    if (guestType === 'adult') adult--;
    else if (guestType === 'children') children--;
    else if (guestType === 'infant') infant--;
    else if (guestType === 'pet') pet--;
    const countValue = { adult, children, infant, pet };
    dispatch(setGuests(countValue));
  };

  useEffect(() => {
    document.addEventListener('click', formClickBeforeDropdownHandler);
    return () => {
      document.removeEventListener('click', formClickBeforeDropdownHandler);
    };
  }, [formClickBeforeDropdownHandler]);

  useEffect(() => {
    if (formselect) changeFocus();
  });

  return (
    <HeaderForm
      isscrolltop={isscrolltop}
      isbuttonnclicked={isbuttonnclicked}
      formselect={formselect}
      headerRefs={headerRefs}
      selectHandler={selectHandler}
      formData={formData}
      addGuestCount={addGuestCount}
      decreaseGuestCount={decreaseGuestCount}
    />
  );
};

export default React.memo(HeaderFormContainer);
