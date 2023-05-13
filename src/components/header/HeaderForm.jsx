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
    <Style.Container>
      <Link to={PATH_URL.MAIN}>
        <HeaderLogo />
      </Link>
      <Style.NavFormContainer>
        <HeaderNav isScrollTop={isScrollTop} />
      </Style.NavFormContainer>
      <Style.ScrollFormButton></Style.ScrollFormButton>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  NavFormContainer: styled.div``,
  ScrollFormButton: styled.div``,
};
export default HeaderForm;
