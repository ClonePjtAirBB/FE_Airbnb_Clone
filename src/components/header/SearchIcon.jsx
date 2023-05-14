import { styled } from 'styled-components';
import { ReactComponent as Icon } from '../assets/search-icon.svg';

const SearchIcon = ({ size, iconSize }) => {
  return (
    <SearchContainer size={size}>
      <Icon width={iconSize} height={iconSize} />
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  background-color: #ff385c;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default SearchIcon;
