import React from 'react';
import Link from 'next/link';
import s from './header.module.scss';
import SelectLang from 'components/SelectLang';
// prettier-ignore
import { BiLogoFacebook, BiLogoInstagramAlt, BiLogoTelegram, BiLogoYoutube } from "react-icons/bi";
import { IconButton } from '@mui/material';
const Header = () => {
  return (
    <header className={s.header}>
      <nav className='container-fluid d-flex-row'>
        <div className={`${s.logo} d-flex-row`}>
          <div className={s.imgCont}>
            <img src='./images/logo.png' alt='ecology logo' />
          </div>
          <p>
            МИНИСТЕРСТВО ЭКОЛОГИИ, <br /> ОХРАНЫ ОКРУЖАЮЩЕЙ СРЕДЫ <br /> И
            ИЗМЕНЕНИЯ КЛИМАТА <br /> РЕСПУБЛИКИ УЗБЕКИСТАН
          </p>
        </div>

        <ul className={`${s.navLinks} d-flex-row`}>
          <li>
            <Link href='/'>О нас</Link>
          </li>
          <li>
            <Link href='/'>Новости и события</Link>
          </li>
          <li>
            <Link href='/'>Услуги</Link>
          </li>
          <li>
            <Link href='/'>Блог</Link>
          </li>
          <li>
            <Link href='/contacts'>Контакты</Link>
          </li>
        </ul>

        <div className={s.selectLang}>
          <SelectLang />
        </div>

        <div className={`${s.socialIcons} d-flex-row`}>
          <IconButton LinkComponent={Link} href='' sx={{ padding: '4px' }}>
            <BiLogoFacebook color='var(--white)' />
          </IconButton>
          <IconButton LinkComponent={Link} href='' sx={{ padding: '4px' }}>
            <BiLogoYoutube color='var(--white)' />
          </IconButton>
          <IconButton LinkComponent={Link} href='' sx={{ padding: '4px' }}>
            <BiLogoInstagramAlt color='var(--white)' />
          </IconButton>
          <IconButton LinkComponent={Link} href='' sx={{ padding: '4px' }}>
            <BiLogoTelegram color='var(--white)' />
          </IconButton>
        </div>
      </nav>
    </header>
  );
};

export default Header;
