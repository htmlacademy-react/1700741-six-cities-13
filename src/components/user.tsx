import { FC } from 'react';

interface UserProps  {
  userName: string;
  favoriteCount: number;
};

const User: FC<UserProps> =({userName, favoriteCount}: UserProps) => {
  return (
    <>
      <li className="header__nav-item user">
      <a className="header__nav-link header__nav-link--profile" href="#">
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__user-name user__name">{userName}</span>
        <span className="header__favorite-count">{favoriteCount}</span>
      </a>
      </li>
    </>
  )
};

export default User;
