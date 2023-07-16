import type { FC } from 'react';

interface HeaderLogoProps {
  width?: number;
  height?: number;
};


const HeaderLogo: FC<HeaderLogoProps> = ({width, height}) => {
  return (
    <div className="header__left">
      <a className="header__logo-link header__logo-link--active">
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={width} height={height} />
      </a>
    </div>
  )
};

export default HeaderLogo;
