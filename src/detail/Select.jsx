import React, { useState } from 'react';
import { styled } from 'styled-components';
import Count from './Count';

function Select({ maxGroupNum }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [sum, setSum] = useState(0);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = option => {
    setSelectedOption(option);
  };

  const handleSumChange = newSum => {
    setSum(newSum);
  };

  return (
    <SelectBox className="dropdown">
      <Stbutton onClick={toggleDropdown} className="dropdown-toggle">
        {selectedOption || 'Select an option'}
      </Stbutton>
      {isOpen && (
        <SelectOptions className="dropdown-menu">
          <Option onClick={() => selectOption()}>
            <Count onSumChange={handleSumChange} maxGroupNum={maxGroupNum} setIsOpen={setIsOpen} />
          </Option>
        </SelectOptions>
      )}
    </SelectBox>
  );
}

export default Select;

const SelectBox = styled.div`
  position: relative;
  width: 318px;
  height: 56px;
  /* padding: 8px; */
  border-radius: 12px;
  background-color: #ffffff;
  align-self: center;
  cursor: pointer;
`;
const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: 56px;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 230px;
  padding: 0;
  border-radius: 8px;
  border: 2px solid #cfcfcf;
  background-color: #ffffff;
  color: #000000;
`;
const Option = styled.li`
  font-size: 14px;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
`;
const Stbutton = styled.button`
  font-size: 30px;
  color: #ffffff;
`;
