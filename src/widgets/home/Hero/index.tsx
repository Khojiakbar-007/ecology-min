import React from 'react';

import s from './hero.module.scss';
import { Button } from '@mui/material';

const circles = [1, 2, 3, 4, 5, 6, 7, 8];

const Hero = () => {
  return (
    <>
      <section className={s.homeHero}>
        <div className={`${s.cont} container-fluid d-flex-row`}>
          <div className={`${s.left} d-flex-col`}>
            <h1 className={s.title}>
              Проект чистая вода направлен на повышение качества питьевой воды
            </h1>

            <p className={s.info}>
              Lorem Ipsum является текст-заполнитель обычно используется в
              графических, печать и издательской индустрии
            </p>

            <Button
              sx={{
                height: '48px',
                textTransform: 'capitalize',
                fontSize: '18px',
                fontWeight: 500,
              }}
              variant='contained'
            >
              Подробнее
            </Button>
          </div>

          <div className={s.right}>
            <div className={s.rotatingImg}>
              <img
                className='coverImage'
                src='/images/hero/hero-img.png'
                alt='shield'
              />
            </div>

            <div className={s.imgCont}>
              <img
                src='/images/hero/hero-bg-image.png'
                alt='uzb-white-flag-shield'
              />
            </div>

            <div className={s.heroRotatingCircles}>
              <img
                className={s.bgCircle}
                src='/images/hero/hero-animated-circle-dashed.png'
                alt=''
              />

              {circles.map(i => (
                <img
                  className={s.circle}
                  key={i}
                  src={`/images/hero/anim-circle-imgs/${i}.webp`}
                  alt=''
                />
              ))}
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
                src='/images/hero/hero-bottom-img1.png'
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
                src='/images/hero/hero-bottom-img2.png'
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
                src='/images/hero/hero-bottom-img1.png'
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
