import { NavLink } from 'react-router-dom';
import s from './NavMenu.module.scss';
import classNames from 'classnames';

export const NavMenu = () => {

  return (
    <nav className={s.nav}>
      <ul className={s.nav__list}>
        <li className={s.nav__item}>
          <NavLink to="/" className={s.nav__link}>
            Home
          </NavLink>
        </li>
        <li
          className={s.nav__item}
        >
          <div className={classNames(s.nav__link, s.services__hover)}>
            Services
            <span className={s.services__triangle}></span>
            <ul className={s.dropdown}>
              <li className={s.dropdown__item}>
                <NavLink to="teeth-whitening" className={s.dropdown__link}>
                  Teeth whitening
                </NavLink>
              </li>
              <li className={s.dropdown__item}>
                <NavLink to="teeth-cleaning" className={s.dropdown__link}>
                  Teeth cleaning
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li className={s.nav__item}>
          <NavLink to="contact-us" className={s.nav__link}>
            Contact
          </NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink to="about-us" className={s.nav__link}>
            About us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
  ;
}