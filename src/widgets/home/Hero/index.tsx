import React from 'react';
import Header from 'widgets/header';

import s from './hero.module.scss';
import { Button } from '@mui/material';

const Hero = () => {
  return (
    <>
      <section className={s.homeHero}>
        <Header />
        <div className={`${s.cont} container-fluid d-flex-row`}>
          <div className={`${s.left} d-flex-col`}>
            <h1 className={s.title}>
              Проект чистая вода направлен на повышение качества питьевой воды
            </h1>

            <p className={s.info}>
              Lorem Ipsum является текст-заполнитель обычно используется в
              графических, печать и издательской индустрии
            </p>

            <Button variant='contained'>Подробнее</Button>
          </div>

          <div className={s.right}>
            <div className={s.rotatingImg}>
              <img
                className='coverImage'
                src='./images/hero-image.png'
                alt='shield'
              />
            </div>

            <div className={s.imgCont}>
              <img
                src='./images/hero-bg-image.png'
                alt='uzb-white-flag-shield'
              />
            </div>
          </div>
        </div>
      </section>

      <div className={s.bottomInfo}>
        <div className={`${s.bottomCont} container-fluid d-flex-row-start`}>
          <div className={`${s.teaVal} d-flex-row`}>
            <figure className={s.imgCont}>
              <img
                className='coverImage'
                src='./images/hero-bottom-img1.png'
                alt='plant'
              />
            </figure>
            <p className={`${s.desc} d-flex-col`}>
              <span className={s.title}>Чой хаки</span>
              <span className={s.number}>1 113 156</span>
            </p>
          </div>
          <div className={`${s.teaVal} d-flex-row`}>
            <figure className={s.imgCont}>
              <img
                className='coverImage'
                src='./images/hero-bottom-img2.png'
                alt='plant'
              />
            </figure>
            <p className={`${s.desc} d-flex-col`}>
              <span className={s.title}>Чой хаки</span>
              <span className={s.number}>1 113 156</span>
            </p>
          </div>
          <div className={`${s.teaVal} d-flex-row`}>
            <figure className={s.imgCont}>
              <img
                className='coverImage'
                src='./images/hero-bottom-img1.png'
                alt='plant'
              />
            </figure>
            <p className={`${s.desc} d-flex-col`}>
              <span className={s.title}>Чой хаки</span>
              <span className={s.number}>1 113 156</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
