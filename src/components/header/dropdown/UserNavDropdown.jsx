import { styled } from 'styled-components';

const UserNavDropdown = () => {
  return (
    <StContainer>
      <StDropdownLi>로그인</StDropdownLi>
      <StDropdownLi>회원가입</StDropdownLi>
      <StDropdownLi>도움말</StDropdownLi>
    </StContainer>
  );
};

const StContainer = styled.ul`
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

const StDropdownLi = styled.li`
  padding: 10px 22px;
  padding-right: 90px;
  cursor: pointer;

  &:hover {
    background-color: #dddddd;
  }
`;

export default UserNavDropdown;
