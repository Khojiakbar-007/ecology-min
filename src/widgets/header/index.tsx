import React from 'react';
import Link from 'next/link';
import s from './header.module.scss';
import SelectLang from 'components/select-lang';
// prettier-ignore
import { BiLogoFacebook, BiLogoInstagramAlt, BiLogoTelegram, BiLogoYoutube } from "react-icons/bi";
import { IconButton } from '@mui/material';
import { useRouter } from 'next/router';
import LinkItem from './link-item';
import logoImg from 'shared/assets/logo-state-emblem.webp';

const allLinks = [
  {
    title: 'Biz haqimizda',
    mainLink: '/about',
    data: [
      {
        name: 'Tashkilot tarixi',
        link: '/history',
      },
      {
        name: 'Raxbariyat',
        link: '/management',
      },
      {
        name: 'Tuzilma',
        link: '/structure',
      },
      {
        name: 'Markaziy apparat',
        link: '/central-apparat',
      },
      {
        name: 'Hududiy filiallar',
        link: '/regional-management',
      },
      {
        name: 'Korrupsiyaga qarshi kurashish  ',
        link: '/fight-corruption',
      },
      {
        name: 'Tender va tanlovlar',
        link: '/tenders-contests',
      },
    ],
  },
  // {
  //   title: 'Xizmatlar',
  //   mainLink: '/services',
  // },
];

const Header = () => {
  const { pathname } = useRouter();
  const isAtHome = pathname === '/';
  return (
    <header className={`${s.header} ${isAtHome ? s.homeHeader : ''}`}>
      <nav className='container-fluid d-flex-row'>
        <Link href='/'>
          <div className={`${s.logo} d-flex-row`}>
            <div className={s.imgCont}>
              <img src={logoImg.src} alt='ecology logo' />
            </div>
            <p>
              Sanitar Tozalash <br /> ishlarini tashkil etish <br /> Respublika
              markazi
              {/* МИНИСТЕРСТВО ЭКОЛОГИИ, <br /> ОХРАНЫ ОКРУЖАЮЩЕЙ СРЕДЫ <br /> И
              ИЗМЕНЕНИЯ КЛИМАТА <br /> РЕСПУБЛИКИ УЗБЕКИСТАН */}
            </p>
          </div>
        </Link>

        <nav>
          <ul className={`${s.navLinks} d-flex-row`}>
            {allLinks.map(item => (
              <LinkItem
                key={item.mainLink}
                links={item.data}
                mainLink={item.mainLink}
                title={item.title}
              />
            ))}
            {/* <li>
              <Link href='/about'>Biz haqimizda</Link>
            </li> */}
            <li>
              <Link href='/services'>Xizmatlar</Link>
            </li>
            <li>
              <Link href='/news'>Faoliyat</Link>
            </li>
            <li>
              <Link href='#'>Hujjatlar</Link>
            </li>
            {/* <li>
              <Link href='/news'>Faoliyat</Link>
            </li> */}
            <li>
              <Link href='#'>Axborot xizmati</Link>
            </li>
            <li>
              <Link href='/contacts'>Bog'lanish</Link>
            </li>
            {/* <li>
              <Link href='/about'>О нас</Link>
            </li>
            <li>
              <Link href='/news'>Новости и события</Link>
            </li>
            <li>
              <Link href='/services'>Услуги</Link>
            </li>
            <li>
              <Link href='/contacts'>Контакты</Link>
            </li> */}
          </ul>
        </nav>

        <div className={s.selectLang}>
          <SelectLang />
        </div>

        {/* <div className={`${s.socialIcons} d-flex-row`}>
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
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
