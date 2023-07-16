import {Link} from 'react-router-dom';

interface HeaderLogoProps {
  width?: number;
  height?: number;
};

function HeaderLogo({width, height}: HeaderLogoProps ): JSX.Element {
  return (
    <div className="header__left">
      <Link className="header__logo-link header__logo-link--active" to={"/"}>
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={width} height={height} />
      </Link>
    </div>
  )
};

export default HeaderLogo;
