import { useRef } from 'react';

const useHeaderRef = () => {
  const placeWrapperRef = useRef();
  const placeDropdownRef = useRef();
  const checkInWrapperRef = useRef();
  const checkInDropdownRef = useRef();
  const checkOutWrapperRef = useRef();
  const checkOutDropdownRef = useRef();
  const guestWrapperRef = useRef();
  const guestDropdownRef = useRef();

  return {
    placeWrapperRef,
    placeDropdownRef,
    checkInWrapperRef,
    checkInDropdownRef,
    checkOutWrapperRef,
    checkOutDropdownRef,
    guestWrapperRef,
    guestDropdownRef,
  };
};

export default useHeaderRef;
