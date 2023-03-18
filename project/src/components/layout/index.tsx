import { ReactNode } from 'react';
import Header from '../header';

type LayoutProps = {
  children: ReactNode;
  className?: string;
};

function Layout({ children, className }: LayoutProps): JSX.Element {
  return (
    <div className={`page ${className ?? ''}`}>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
