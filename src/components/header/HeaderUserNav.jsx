import { styled } from 'styled-components';
import { ReactComponent as LineIcon } from '../assets/header-user-button-line.svg';
import { ReactComponent as UserIcon } from '../assets/header-user-button-icon.svg';

const HeaderUserNav = () => {
  return (
    <Container>
      <Button>당신의 공간을 에어비앤비하세요</Button>

      <UserContainer>
        <LineIcon />
        <UserIcon />
      </UserContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 0.7rem;
`;

const Button = styled.button`
  font-weight: 600;
  font-size: 14px;
  color: #222222;
  height: 42px;
`;

const UserContainer = styled.button`
  width: 77px;
  height: 42px;
  border: 1px solid #dddddd;
  border-radius: 40px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default HeaderUserNav;
