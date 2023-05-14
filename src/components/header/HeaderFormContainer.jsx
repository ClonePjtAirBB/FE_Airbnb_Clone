import HeaderForm from './HeaderForm';
import useHeaderRef from '../../hooks/useHeaderRef';
import { useEffect, useRef, useState, useCallback } from 'react';
import React from 'react';

const HeaderFormContainer = ({ isscrolltop, isbuttonnclicked }) => {
  const [formSelect, setFormSelect] = useState(null);
  const headerRefs = useHeaderRef();
  const latestSelect = useRef(formSelect);

  latestSelect.current = formSelect;

  const selectHandler = select => {
    setFormSelect(select);
  };

  const changeFocus = () => {
    if (latestSelect.current === 'checkIn') headerRefs.checkInWrapperRef.current.focus();
    else if (latestSelect.current === 'checkOut') headerRefs.checkInWrapperRef.current.focus();
    else if (latestSelect.current === 'guests') headerRefs.guestWrapperRef.current.focus();
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

  useEffect(() => {
    document.addEventListener('click', dropdownHanlder);
    return () => {
      document.removeEventListener('click', dropdownHanlder);
    };
  }, [dropdownHanlder]);

  useEffect(() => {
    if (formSelect) changeFocus();
  });

  return (
    <HeaderForm
      isscrolltop={isscrolltop}
      isbuttonnclicked={isbuttonnclicked}
      formSelect={formSelect}
      headerRefs={headerRefs}
      selectHandler={selectHandler}
    />
  );
};

export default React.memo(HeaderFormContainer);
