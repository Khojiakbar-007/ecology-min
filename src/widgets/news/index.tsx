import React from 'react';

import s from './news.module.scss';
import { Button, ButtonProps } from '@mui/material';
import Link from 'next/link';

const news = [
  '/images/news/new1.webp',
  '/images/news/new2.webp',
  '/images/news/new3.webp',
  '/images/news/new4.webp',
  '/images/news/new5.webp',
];

const News = () => {
  return (
    <>
      <section className={s.news}>
        <div className={`${s.topTitle}`}>
          <div className='container-fluid text-center'>
            <h1 className={s.title}>Новости и события</h1>
            <p className={s.todayDate}>31.07.2023</p>
          </div>
        </div>

        <div className={s.newsWrapper}>
          <div className='container-fluid d-flex-row-top'>
            <div className={`${s.newsList} d-flex-col`}>
              {news.map((imgUrl, i) => (
                <Link
                  href={`news/${i}`}
                  key={imgUrl + i}
                  className={`${s.new} d-flex-row`}
                >
                  <figure className={s.imgCont}>
                    <img className='coverImage' src={imgUrl} alt='' />
                  </figure>

                  <div className={s.desc}>
                    <p className={s.date}>31.07.2023</p>
                    <h3 className={s.title}>
                      Незаконная рыбалка в Джизакской области
                    </h3>
                    <p className={s.descText}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Non blandit massa enim nec.
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <aside className={s.themes}>
              <h3 className={s.title}>Темы</h3>
              <div className={`${s.themesCont} d-flex-row`}>
                <ThemeButton>ПРо</ThemeButton>
                <ThemeButton>Experience</ThemeButton>
                <ThemeButton>Screen</ThemeButton>
                <ThemeButton>Technology</ThemeButton>
                <ThemeButton>Marketing</ThemeButton>
                <ThemeButton>Life</ThemeButton>
              </div>

              <div className={s.decorImgCont}>
                <img src='/images/decor-right.webp' alt='' />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const ThemeButton = ({ sx, ...rest }: ButtonProps) => {
  return (
    <Button
      sx={{
        padding: '6px 24px',
        flexGrow: 1,

        textTransform: 'capitalize',
        borderRadius: '28px',
        fontSize: '14px',
        lineHeight: '225%',
        fontWeight: 700,
        border: '2px solid var(--med-gray) !important',
        color: 'var(--black)',
        ...sx,
      }}
      variant='outlined'
      {...rest}
    />
  );
};

export default News;
