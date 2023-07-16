import { FC } from 'react';

interface SignProps  {
  label: string;
  href: string;
};

const Sign: FC<SignProps> =({label, href}) => {
  return (
    <>
      <li className="header__nav-item">
        <a className="header__nav-link" href={href}>
          <span className="header__signout">{label}</span>
        </a>
      </li>
    </>
  )
};

export default Sign;
