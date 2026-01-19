import { NavLink } from 'react-router-dom';
import s from './BurgerMenu.module.scss';
import classNames from 'classnames';
import { useState } from 'react';
import { ADDRESS, EMAIL, PHONE_NUMBER } from '../../../../constants';

export const BurgerMenu = ({ toggleBurgerMenu }: { toggleBurgerMenu: () => void }) => {
  const [showServices, setShowServices] = useState(false);

  return (
    <nav className={s.nav}>
      <ul className={s.nav__list}>
        <li className={s.nav__item} onClick={toggleBurgerMenu}>
          <NavLink to="/" className={s.nav__link}>
            Home
          </NavLink>
        </li>
        <li className={s.nav__item}>
          <div
            className={classNames(s.nav__link, s.services__hover)}
            onClick={() => {
              setShowServices(prev => !prev)
            }}
          >
            Services
            <ul className={classNames(s.dropdown, {
              [s.active]: showServices,
            })}>
              <li className={s.dropdown__item}>
                <NavLink
                  to="teeth-whitening"
                  className={s.dropdown__link}
                  onClick={toggleBurgerMenu}
                >
                  Teeth whitening
                </NavLink>
              </li>
              <li className={s.dropdown__item}>
                <NavLink
                  to="teeth-cleaning"
                  className={s.dropdown__link}
                  onClick={toggleBurgerMenu}
                >
                  Teeth cleaning
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li className={s.nav__item} onClick={toggleBurgerMenu}>
          <NavLink to="contact-us" className={s.nav__link}>
            Contact
          </NavLink>
        </li>
        <li className={s.nav__item} onClick={toggleBurgerMenu}>
          <NavLink to="about-us" className={s.nav__link}>
            About us
          </NavLink>
        </li>
      </ul>
      <div className={s.info}>
        <h3>Our Location</h3>
        <p>{ADDRESS}</p>
        <p>Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        <p>Phone: <a href={`tel:+${PHONE_NUMBER}`}>{PHONE_NUMBER}</a></p>
      </div>
    </nav>
  );
};
