import React from 'react';
import s from './footer.module.scss';
import Link from 'next/link';
import { IconButton, IconButtonProps } from '@mui/material';
// prettier-ignore
import { BiLogoFacebook, BiLogoInstagramAlt, BiLogoTelegram, BiLogoYoutube } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={`${s.cont} container-fluid d-flex-row-top`}>
        <div className={s.col}>
          <Link href='/'>
            <div className={`${s.logo} d-flex-row`}>
              <div className={s.imgCont}>
                <img src='/images/logo.png' alt='ecology logo' />
              </div>
              <p>
                МИНИСТЕРСТВО ЭКОЛОГИИ, <br /> ОХРАНЫ ОКРУЖАЮЩЕЙ СРЕДЫ <br /> И
                ИЗМЕНЕНИЯ КЛИМАТА <br /> РЕСПУБЛИКИ УЗБЕКИСТАН
              </p>
            </div>
          </Link>

          <div className={`${s.socialLinks} d-flex-row-end`}>
            <StyledIconButton>
              <BiLogoFacebook color='var(--footer-icon-gray)' />
            </StyledIconButton>
            <StyledIconButton>
              <BiLogoYoutube color='var(--footer-icon-gray)' />
            </StyledIconButton>
            <StyledIconButton>
              <BiLogoInstagramAlt color='var(--footer-icon-gray)' />
            </StyledIconButton>
            <StyledIconButton>
              <BiLogoTelegram color='var(--footer-icon-gray)' />
            </StyledIconButton>
          </div>
        </div>
        <div className={`${s.col} d-flex-row-top`}>
          <div className={s.navCol}>
            <h3 className={`${s.linksTitle} d-flex-row-start`}>Страницы</h3>
            <nav>
              {/* prettier-ignore */}
              <ul className={`${s.footerLinks} d-flex-col`}>
                <li><Link href='/'>Главная</Link></li>
                <li><Link href='/about'>О нас</Link></li>
                <li><Link href='/news'>Новости</Link></li>
                <li><Link href='#'>Руководство</Link></li>
                <li><Link href='/contacts'>Контакты</Link></li>
              </ul>
            </nav>
          </div>
          <div className={s.navCol}>
            <h3 className={`${s.linksTitle} d-flex-row-start`}>Услуги</h3>
            <nav>
              <ul className={`${s.footerLinks} d-flex-col`}>
                <li>
                  <Link href='/services'>Вывоз мусора</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className={s.col}>
          <div className={`${s.contactInfo} d-flex-col`}>
            <div className={`${s.row} d-flex-row-top`}>
              <div className={s.icon}>
                <img
                  src='/icons/phone-call--white.svg'
                  alt='phone calling icon'
                />
              </div>
              <div className={`${s.contacts} d-flex-col`}>
                <div className={s.field}>
                  <p className={s.name}>Контакты</p>
                  <a className={s.value} href='tel:998712070770'>
                    +(99871) 207-07-70
                  </a>
                </div>
                <div className={s.field}>
                  <p className={s.name}>Короткий номер</p>
                  <a className={s.value} href='tel:1157'>
                    1157
                  </a>
                </div>
                <div className={s.field}>
                  <p className={s.name}>Телефон доверия</p>
                  <a className={s.value} href='tel:998712070770'>
                    (+99871) 207-07-70 (1013#)
                  </a>
                </div>
              </div>
            </div>

            <div className={`${s.row} d-flex-row-top`}>
              <div className={s.icon}>
                <img src='/icons/email--white.svg' alt='email icon' />
              </div>
              <div className={`${s.contacts} d-flex-col`}>
                <div className={s.field}>
                  <p className={s.name}>Почта</p>
                  <a href='mailto:info@eco.gov.uz' className={s.value}>
                    info@eco.gov.uz
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const StyledIconButton = ({ sx, ...rest }: IconButtonProps) => {
  return (
    <IconButton
      sx={{
        backgroundColor: 'var(--white) !important',
        '&:hover': { backgroundColor: '#eee !important' },
        ...sx,
      }}
      {...rest}
    />
  );
};

export default Footer;
