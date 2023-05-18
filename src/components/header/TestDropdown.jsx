import { useState } from 'react';
import { styled } from 'styled-components';
import { useEffect } from 'react';

const TestDropdown = ({ setTestDropdownOpen, isModalOpen, setIsModalOpen }) => {
  const openClickModalHandler = () => {
    setIsModalOpen(true);
    // setTestDropdownOpen(false);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
    setTestDropdownOpen(false);
  };

  const stopPropagation = e => {
    e.stopPropagation();
  };

  return (
    <>
      <Container onClick={openClickModalHandler}>LOGINList...</Container>
      {isModalOpen && (
        <Back onClick={closeModalHandler}>
          <ModalContainerStyle onClick={stopPropagation}>닫기</ModalContainerStyle>
        </Back>
      )}
    </>
  );
};

const Container = styled.div`
  width: 100px;
  height: 100px;
  position: fixed;
  right: 30px;
  background-color: lightcoral;
  cursor: pointer;
`;

const Back = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContainerStyle = styled.div`
  background: white;
  border-radius: 20px;

  width: 18rem;
  height: 15rem;
  padding: 0 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export default TestDropdown;
