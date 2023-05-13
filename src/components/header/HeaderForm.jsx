import { styled } from 'styled-components';
import { ReactComponent as HeaderLogo } from '../assets/header-logo.svg';
import { Link } from 'react-router-dom';
import { PATH_URL } from '../../constants';
import HeaderNav from './HeaderNav';

const HeaderForm = ({
  isScrollTop,
  isButtonClicked,
  isAnimation,
  onClickLogoHandler,
  onClickButtonHandler,
}) => {
  return (
    <Container isScrollTop={isScrollTop} isButtonClicked={isButtonClicked}>
      <Link to={PATH_URL.MAIN}>
        <HeaderLogo />
      </Link>
      <NavFormContainer>
        <HeaderNav isScrollTop={isScrollTop} />
      </NavFormContainer>
      <ScrollFormButton></ScrollFormButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavFormContainer = styled.div``;

const ScrollFormButton = styled.div``;

export default HeaderForm;
