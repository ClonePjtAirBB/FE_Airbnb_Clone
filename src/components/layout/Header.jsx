import { styled, keyframes } from 'styled-components';
import { ReactComponent as HeaderLogo } from '../assets/header-logo.svg';
import HeaderNav from '../header/HeaderNav';
import HeaderFormContainer from '../header/HeaderFormContainer';
import ScrollFormButton from '../header/ScrollFormButton';
import HeaderUserNav from '../header/HeaderUserNav';
import { useState } from 'react';

const Header = ({
  isscrolltop,
  isbuttonnclicked,
  initanimation,
  onClickLogoHandler,
  onClickButtonHandler,
}) => {
  // UserNav 드롭다운, 모달
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container
      isscrolltop={isscrolltop.toString()}
      isbuttonnclicked={isbuttonnclicked.toString()}
      initanimation={initanimation.toString()}
    >
      <HeaderLogo onClick={onClickLogoHandler} />

      <NavFormContainer
        isscrolltop={isscrolltop.toString()}
        isbuttonnclicked={isbuttonnclicked.toString()}
        initanimation={initanimation.toString()}
      >
        <HeaderNav
          isscrolltop={isscrolltop.toString()}
          isbuttonnclicked={isbuttonnclicked.toString()}
        />
        <HeaderFormContainer
          isscrolltop={isscrolltop.toString()}
          isbuttonnclicked={isbuttonnclicked.toString()}
        />
      </NavFormContainer>

      <ScrollFormButtonContainer
        onClick={onClickButtonHandler}
        isscrolltop={isscrolltop.toString()}
        isbuttonnclicked={isbuttonnclicked.toString()}
      >
        <ScrollFormButton />
      </ScrollFormButtonContainer>

      <UserNavContainer>
        <HeaderUserNav
          isUserDropdownOpen={isUserDropdownOpen}
          setIsUserDropdownOpen={setIsUserDropdownOpen}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </UserNavContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  box-sizing: border-box;
  z-index: 100;
  position: fixed;
  background-color: white;
  width: 100%;
  top: 0;
  padding: 20px 80px 15px 80px;
  border-bottom: 1px solid #ebebeb;

  height: ${({ isbuttonnclicked }) => (isbuttonnclicked === 'true' ? '180px' : '80px')};

  :first-child {
    cursor: pointer;
  }
`;

const slideDown = keyframes`
from {
  transform: scale(0.3, 0.75) translateY(-80px);
}
to {
  transform: scale(1, 1) translateY(0px);
}
`;

const slideUp = keyframes`
from {
  transform: scale(1, 1) translateY(0px);
  opacity: 0.5;
}
to {
  transform: scale(0.3, 0.75) translateY(-80px);
  opacity: 0;
  visibility: hidden;
}
`;

const NavFormContainer = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: calc(50vw - 425px);
  width: 850px;
  flex-direction: column;

  animation-duration: 0.2s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-name: ${({ isscrolltop, isbuttonnclicked }) =>
    isscrolltop === 'false' || isbuttonnclicked === 'true' ? slideDown : slideUp};
  animation: ${({ initanimation }) => !initanimation && 'none'};
`;

const ScrollFormButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${({ isbuttonnclicked }) => isbuttonnclicked === 'true' && 'none'};
`;

const UserNavContainer = styled.div``;

export default Header;
