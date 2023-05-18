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

  &:hover {
    transition: 0.5s;
    background-color: #fc0a37;
  }
`;

export default SearchIcon;
