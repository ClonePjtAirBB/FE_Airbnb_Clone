import HeaderForm from './HeaderForm';
import useHeaderRef from '../../hooks/useHeaderRef';
import { useEffect, useRef, useState, useCallback } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFormData } from '../../modules/filterForm';

const HeaderFormContainer = ({ isscrolltop, isbuttonnclicked }) => {
  const [formselect, setFormSelect] = useState(null);
  const headerRefs = useHeaderRef();
  const latestSelect = useRef(formselect);
  const formData = useSelector(state => state.filterForm);
  const dispatch = useDispatch();

  const { place, checkIn, checkOut, guests } = formData;

  latestSelect.current = formselect;

  const selectHandler = select => {
    setFormSelect(select);
  };

  const changeFocus = () => {
    if (latestSelect.current === 'checkIn') headerRefs.checkInWrapperRef.current.focus();
    else if (latestSelect.current === 'checkOut') headerRefs.checkInWrapperRef.current.focus();
    else if (latestSelect.current === 'guests') headerRefs.guestWrapperRef.current.focus();
  };

  const changeFormData = (name, value) => {
    const data = { name, value }; // {'place/checkIn/checkOut/guests', payload}
    dispatch(setFormData(data));
  };

  const dropdownHanlder = useCallback(
    ({ target }) => {
      switch (true) {
        case headerRefs.placeWrapperRef.current.contains(target):
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
    changeFormData('guests', countValue);
  };

  const decreaseGuestCount = (guestsData, guestType) => {
    let { adult, children, infant, pet } = guestsData;
    if (guestType === 'adult') adult--;
    else if (guestType === 'children') children--;
    else if (guestType === 'infant') infant--;
    else if (guestType === 'pet') pet--;
    const countValue = { adult, children, infant, pet };
    changeFormData('guests', countValue);
  };

  useEffect(() => {
    document.addEventListener('click', dropdownHanlder);
    return () => {
      document.removeEventListener('click', dropdownHanlder);
    };
  }, [dropdownHanlder]);

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
      changeFormData={changeFormData}
    />
  );
};

export default React.memo(HeaderFormContainer);
