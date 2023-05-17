import { styled } from 'styled-components';
import LoginModal from '../modal/LoginModal';

const UserNavDropdown = ({ setIsUserDropdownOpen, isModalOpen, setIsModalOpen }) => {
  const dropdownClickHandler = () => {
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
    setIsUserDropdownOpen(false);
  };

  const stopPropagation = e => {
    e.stopPropagation();
  };

  return (
    <>
      <StContainer>
        <StDropdownLi onClick={dropdownClickHandler}>로그인</StDropdownLi>
        <StDropdownLi>회원가입</StDropdownLi>
        <StDropdownLi onClick={() => setIsModalOpen(true)}>도움말</StDropdownLi>
      </StContainer>
      {isModalOpen && (
        <ModalBackground onClick={closeModalHandler}>
          <LoginModal />
        </ModalBackground>
      )}
    </>
  );
};

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  :first-child {
    padding-top: 20px;
  }
  :last-child {
    padding-top: 15px;
    padding-bottom: 20px;
  }
  :nth-child(2) {
    padding-bottom: 15px;
    border-bottom: 1px solid #dddddd;
  }
`;

const StDropdownLi = styled.div`
  padding: 10px 22px;
  padding-right: 90px;
  cursor: pointer;

  &:hover {
    background-color: #dddddd;
  }
`;

const ModalBackground = styled.div`
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

export default UserNavDropdown;
