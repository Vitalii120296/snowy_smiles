import { useEffect, useState } from 'react';
import { BurgerMenu } from './components/BurgerMenu';
import { NavMenu } from './components/NavMenu';
import s from './Header.module.scss';
import classNames from 'classnames';
import { PHONE_NUMBER } from '../../constants';



export const Header = () => {
  const [activeBurger, setActiveBurger] = useState(false);
  const toggleBurgerMenu = () => setActiveBurger(prev => !prev);

  useEffect(() => {
    if (activeBurger) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // При розмонтуванні повертаємо overflow
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeBurger]);


  return (
    <div className={s.header}>
      <div className={s.header__logo}>
        <a href="/">
          <img src="./img/header_logo.png" alt="logo" />
        </a>
      </div>
      <div className={s.header__nav}>
        <NavMenu />
      </div>
      <div className={s.header__number}>
        <a href={`tel:+${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
      </div>
      <div className={classNames(s.header__burger_button, {
        [s.open]: activeBurger,
      })} onClick={toggleBurgerMenu}>
        <svg width="24" height="24" viewBox="0 0 16 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect className={classNames(s.line, s.top)} id="top" y="0" width="16" height="2" rx="1" />
          <rect className={classNames(s.line, s.mid)} id="mid" y="5" width="16" height="2" rx="1" />
          <rect className={classNames(s.line, s.bot)} id="bot" y="10" width="16" height="2" rx="1" />
        </svg>
      </div>
      <div className={classNames(s.header__burger, {
        [s.active]: activeBurger
      }
      )}>
        <BurgerMenu toggleBurgerMenu={toggleBurgerMenu} />
      </div>
    </div >
  );
};