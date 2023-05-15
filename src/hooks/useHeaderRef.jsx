import { useRef } from 'react';

const useHeaderRef = () => {
  const formRef = useRef();
  const placeWrapperRef = useRef();
  const placeDropdownRef = useRef();
  const checkInWrapperRef = useRef();
  const checkInDropdownRef = useRef();
  const checkOutWrapperRef = useRef();
  const checkOutDropdownRef = useRef();
  const calendarDropdownRef = useRef();
  const guestWrapperRef = useRef();
  const guestDropdownRef = useRef();

  const headerRefs = {
    formRef,
    placeWrapperRef,
    placeDropdownRef,
    checkInWrapperRef,
    checkInDropdownRef,
    checkOutWrapperRef,
    checkOutDropdownRef,
    guestWrapperRef,
    guestDropdownRef,
  };

  return headerRefs;
};

export default useHeaderRef;
