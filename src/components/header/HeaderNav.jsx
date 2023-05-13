import { css, styled } from 'styled-components';

const HeaderNav = ({ isscrolltop }) => {
  return (
    <NavStyle isscrolltop={isscrolltop.toString()}>
      <UlStyle>
        <li>
          <LabelStyle>
            <CheckItem type="radio" name="nav" value="stay" defaultChecked />
            <SpanText>숙소</SpanText>
          </LabelStyle>
        </li>
        <li>
          <LabelStyle>
            <CheckItem type="radio" name="nav" value="experience" />
            <SpanText>체험</SpanText>
          </LabelStyle>
        </li>
        <li>
          <LabelStyle>
            <CheckItem type="radio" name="nav" value="online-experience" />
            <SpanText>온라인 체험</SpanText>
          </LabelStyle>
        </li>
      </UlStyle>
    </NavStyle>
  );
};

const NavStyle = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;

  ${({ isscrolltop }) =>
    isscrolltop === 'true'
      ? css`
          color: white;
          & ${SpanText}::before {
            background-color: white;
          }
        `
      : css`
          color: black;
          & ${SpanText}::before {
            background-color: black;
          }
        `}
`;

const UlStyle = styled.ul`
  display: flex;
`;

const LabelStyle = styled.label`
  display: block;
`;
const SpanText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 10px 12px;
  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    width: 18px;
    height: 2px;
    border-radius: 1px;
    transform: scaleX(0);
    transition: 0.25s transform cubic-bezier(0, 0, 0.1, 1);
  }
`;
const CheckItem = styled.input`
  display: none;
  &:hover + ${SpanText}::before {
    transform: scaleX(0.5);
    transition: 0.25s transform cubic-bezier(0, 0, 0.1, 1);
  }
  &:checked + ${SpanText}::before {
    transform: scaleX(1.3);
    transition: 0.25s transform cubic-bezier(0, 0, 0.1, 1);
  }
`;

export default HeaderNav;
