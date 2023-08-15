import {Outlet} from 'react-router-dom';
import Logo from './logo';
import User from './user';
import Sign from './sign';

function Layout (): JSX.Element {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo width={81} height={41}></Logo>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <User userName='Oliver.conner@gmail.com' favoriteCount={3}></User>
                <Sign label="Sign out" href="#"></Sign>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
