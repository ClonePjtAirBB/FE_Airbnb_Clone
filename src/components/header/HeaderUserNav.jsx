import { styled } from 'styled-components';
import { ReactComponent as LineIcon } from '../assets/header-user-button-line.svg';
import { ReactComponent as UserIcon } from '../assets/header-user-button-icon.svg';
import { useRef } from 'react';
import Dropdown from '../global/Dropdown';
import UserNavDropdown from './dropdown/UserNavDropdown';

const HeaderUserNav = ({
  isUserDropdownOpen,
  setIsUserDropdownOpen,
  isModalOpen,
  setIsModalOpen,
}) => {
  const dropdownRef = useRef(null);

  return (
    <>
      <Container>
        <Button>당신의 공간을 에어비앤비하세요</Button>

        <UserContainer ref={dropdownRef} onClick={() => setIsUserDropdownOpen(true)}>
          <LineIcon />
          <UserIcon />
        </UserContainer>

        {isUserDropdownOpen && (
          <>
            <UserDropdownWrapper dropdownState="user">
              <UserNavDropdown
                setIsUserDropdownOpen={setIsUserDropdownOpen}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
              />
            </UserDropdownWrapper>
          </>
        )}
      </Container>
    </>
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

  @media screen and (max-width: 1079px) {
    display: none;
  }
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

const UserDropdownWrapper = styled(Dropdown)`
  top: 68px;
  right: 70px;
  padding: 0;
  border-radius: 10px;
  font-size: 14px;
`;

export default HeaderUserNav;
