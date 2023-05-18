import { styled } from 'styled-components';
import LoginModal from '../modal/LoginModal';
import { useState } from 'react';
import SignupModal from '../modal/SignupModal';

const UserNavDropdown = ({ setIsUserDropdownOpen, isModalOpen, setIsModalOpen }) => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showSigninModal, setShowSigninModal] = useState(false);

  const dropdownClickHandler = clickType => {
    setIsModalOpen(true);
    if (clickType === 'signin') setShowSigninModal(true);
    if (clickType === 'signup') setShowSignupModal(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
    setIsUserDropdownOpen(false);
  };

  const logoutClickHandler = () => {
    alert('정상적으로 로그아웃되었습니다.');
    sessionStorage.clear();
    window.location.reload();
  };

  const isLogin = sessionStorage.getItem('login') === 'true';

  return (
    <>
      <StContainer>
        {isLogin ? (
          <StDropdownLi onClick={logoutClickHandler}>로그아웃</StDropdownLi>
        ) : (
          <>
            <StDropdownLi onClick={() => dropdownClickHandler('signin')}>로그인</StDropdownLi>
            <StDropdownLi onClick={() => dropdownClickHandler('signup')}>회원가입</StDropdownLi>
          </>
        )}
        <StDropdownLi>도움말</StDropdownLi>
      </StContainer>
      {isModalOpen && (
        <ModalBackground onClick={closeModalHandler}>
          {showSigninModal && (
            <LoginModal
              closeModalHandler={closeModalHandler}
              setShowSignupModal={setShowSignupModal}
              setShowSigninModal={setShowSigninModal}
            />
          )}
          {showSignupModal && (
            <SignupModal
              closeModalHandler={closeModalHandler}
              setShowSignupModal={setShowSignupModal}
              setShowSigninModal={setShowSigninModal}
            />
          )}
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
  :last-child {
    border-top: 1px solid #dddddd;
  }
  :nth-child(2) {
    padding-bottom: 15px;
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
