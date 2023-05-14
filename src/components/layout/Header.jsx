import { styled, keyframes } from 'styled-components';
import { ReactComponent as HeaderLogo } from '../assets/header-logo.svg';
import { Link } from 'react-router-dom';
import { PATH_URL } from '../../constants';
import HeaderNav from '../header/HeaderNav';
import HeaderFormContainer from '../header/HeaderFormContainer';
import ScrollFormButton from '../header/ScrollFormButton';

const Header = ({
  isscrolltop,
  isbuttonnclicked,
  isAnimation,
  onClickLogoHandler,
  onClickButtonHandler,
}) => {
  return (
    <Container isscrolltop={isscrolltop.toString()} isbuttonnclicked={isbuttonnclicked.toString()}>
      <Link to={PATH_URL.MAIN}>
        <HeaderLogo />
      </Link>
      <NavFormContainer>
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

  height: ${({ isbuttonnclicked }) => (isbuttonnclicked === 'true' ? '180px' : '80px')};
  border-bottom: ${({ isscrolltop }) => isscrolltop === 'false' && '1px solid #DDDDDD'};
`;

const NavFormContainer = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: calc(50vw - 425px);
  width: 850px;
  flex-direction: column;
  /* display: ${({ isscrolltop, isbuttonnclicked }) =>
    isscrolltop === 'true' || isbuttonnclicked === 'true' ? 'flex' : 'none'}; */
`;

const ScrollFormButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${({ isbuttonnclicked }) => isbuttonnclicked === 'true' && 'none'};
`;

export default Header;
