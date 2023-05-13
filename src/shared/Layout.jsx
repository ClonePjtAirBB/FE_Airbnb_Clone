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
  margin-top: 80px;
`;

export default Layout;
