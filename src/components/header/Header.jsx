import { styled, keyframes } from 'styled-components';
import { ReactComponent as HeaderLogo } from '../assets/header-logo.svg';
import { Link } from 'react-router-dom';
import { PATH_URL } from '../../constants';
import HeaderNav from './HeaderNav';

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
      </NavFormContainer>
      <ScrollFormButton></ScrollFormButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
  z-index: 100;
  position: fixed;
  background-color: white;
  width: 100%;
  top: 0;
  padding: 20px 80px 15px 80px;

  height: ${({ isbuttonnclicked }) => (isbuttonnclicked === 'true' ? '180px' : '80px')};
  background-color: ${({ isscrolltop }) => (isscrolltop === 'true' ? 'transparent' : 'white')};
  border-bottom: ${({ isscrolltop }) => isscrolltop === 'false' && '1px solid #DDDDDD'};
`;

const NavFormContainer = styled.div``;

const ScrollFormButton = styled.div``;

export default Header;
