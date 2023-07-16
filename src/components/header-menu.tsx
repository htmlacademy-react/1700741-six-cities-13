import { FC } from 'react';

interface HeaderMenuProps {

}

const HeaderMenu: FC = () => {
  return (
    <nav class="header__nav">
    <ul class="header__nav-list">
      <li class="header__nav-item user">
        <a class="header__nav-link header__nav-link--profile" href="#">
          <div class="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span class="header__user-name user__name">Oliver.conner@gmail.com</span>
          <span class="header__favorite-count">3</span>
        </a>
      </li>
      <li class="header__nav-item">
        <a class="header__nav-link" href="#">
          <span class="header__signout">Sign out</span>
        </a>
      </li>
    </ul>
    </nav>)
  }
