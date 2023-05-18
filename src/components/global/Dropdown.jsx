import { useEffect } from 'react';
import { styled } from 'styled-components';

const Dropdown = ({
  children,
  dropdownState,
  top,
  left,
  right,
  padding,
  closeDropdownHandler,
  ...rest
}) => {
  // TEST CODE
  console.log('Dropdown rendering');

  useEffect(() => {
    window.addEventListener('click', closeDropdownHandler);
    return () => {
      window.removeEventListener('click', closeDropdownHandler);
    };
  }, [closeDropdownHandler]);

  if (!dropdownState) return;

  return (
    <DropdownBox
      dropdownState={dropdownState}
      top={top}
      right={right}
      left={left}
      padding={padding}
      {...rest}
    >
      {children}
    </DropdownBox>
  );
};

const DropdownBox = styled.div`
  position: absolute;
  min-width: 100px;
  min-height: 100px;
  top: ${({ top }) => top || '5.4rem'};
  right: ${({ right }) => right};
  left: ${({ left }) => left};
  padding: ${({ padding }) => padding};
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${({ formselect }) =>
    formselect === 'checkIn' || formselect === 'checkOut' ? 'transparent' : 'white'};
  border: ${({ formselect }) =>
    formselect === 'checkIn' || formselect === 'checkOut' ? 'transparent' : '0.5px solid #ebebeb'};
  border-radius: 32px;
  box-shadow: ${({ formselect }) =>
    formselect === 'checkIn' || formselect === 'checkOut'
      ? 'none'
      : ' rgba(0, 0, 0, 0.15) 0px 10px 37px'};

  z-index: 10;
`;

export default Dropdown;
