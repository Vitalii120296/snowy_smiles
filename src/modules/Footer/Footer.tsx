import { useState } from 'react';
import { ADDRESS, EMAIL, PHONE_NUMBER } from '../../constants';
import s from "./Footer.module.scss";
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export const Footer = () => {
  const [showServices, setShowServices] = useState(false);

  return (
    <footer className={s.footer}>
      <div className={s.footer__content}>
        <div className={s.footer__logo}>
          <img src="./img/logo.jpg" alt="Company Logo" />
          <p>Creating brighter smiles every day.</p>
        </div>

        <nav className={s.footer__nav}>
          <ul className={s.nav__list}>
            <li className={s.nav__item}>
              <NavLink to="/" className={s.nav__link}>
                Home
              </NavLink>
            </li>

            <li className={s.nav__item}>
              <div
                className={classNames(s.nav__link, s.services__hover)}
                onClick={() => setShowServices((prev) => !prev)}
              >
                Services
                <ul
                  className={classNames(s.dropdown, {
                    [s.active]: showServices,
                  })}
                >
                  <li className={s.dropdown__item}>
                    <NavLink to="/teeth-whitening" className={s.dropdown__link}>
                      Teeth Whitening
                    </NavLink>
                  </li>
                  <li className={s.dropdown__item}>
                    <NavLink to="/teeth-cleaning" className={s.dropdown__link}>
                      Teeth Cleaning
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>

            <li className={s.nav__item}>
              <NavLink to="/contact-us" className={s.nav__link}>
                Contact
              </NavLink>
            </li>
            <li className={s.nav__item}>
              <NavLink to="/about-us" className={s.nav__link}>
                About Us
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className={s.footer__contact}>
          <p><strong>Call:</strong> <a href={`tel:+${PHONE_NUMBER}`}>{PHONE_NUMBER}</a></p>
          <p><strong>Email:</strong> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
          <p><strong>Address:</strong>{ADDRESS}</p>
        </div>

        <div className={s.footer__social}>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://www.instagram.com/snowysmiles.teethwhitening/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok</a>
        </div>
      </div>

      <div className={s.footer__bottom}>
        <p>© {new Date().getFullYear()} Teeth Whitening Co. All rights reserved.</p>
        <div className={s.footer__legal}>
          <a href="/about-us">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
