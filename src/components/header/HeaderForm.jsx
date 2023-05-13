import { styled } from 'styled-components';
import { ReactComponent as HeaderLogo } from '../assets/header-logo.svg';
import { Link } from 'react-router-dom';
import { PATH_URL } from '../../constants';
import HeaderNav from './HeaderNav';

const HeaderForm = ({
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
        <HeaderNav isscrolltop={isscrolltop} />
      </NavFormContainer>
      <ScrollFormButton></ScrollFormButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  z-index: 100;

  height: ${({ isbuttonnclicked }) => (isbuttonnclicked === 'true' ? '180px' : '80px')};
  border: 1px solid #ebebeb;
`;

const NavFormContainer = styled.div``;

const ScrollFormButton = styled.div``;

export default HeaderForm;
