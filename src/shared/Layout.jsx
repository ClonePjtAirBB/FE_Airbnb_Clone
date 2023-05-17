import styled from 'styled-components';
import Footer from '../components/layout/Footer';
import HeaderContainer from '../components/layout/HeaderContainer';

const Layout = ({ children }) => {
  return (
    <>
      <HeaderContainer />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

const Content = styled.div`
  min-height: 100vh;
  margin-top: 180px;
`;

export default Layout;
