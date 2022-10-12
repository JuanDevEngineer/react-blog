import { FC, ReactNode } from 'react';
import Footer from '../ui/Footer';
import Header from '../ui/Header';

interface Props {
  children?: JSX.Element[] | JSX.Element | ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
