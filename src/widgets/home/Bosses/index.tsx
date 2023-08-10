import React from 'react';

import s from './bosses.module.scss';
import { Button } from '@mui/material';

const Bosses = () => {
  return (
    <section className={s.bosses}>
      <div className='container-fluid'>
        <h2 className={s.title}>Руководство</h2>

        <div className={`${s.cards} d-flex-row-start`}>
          {[1, 2].map(i => (
            <div key={i} className={`${s.bossCard} d-flex-row-top`}>
              <figure className={s.leftImgCont}>
                <img src='/images/home/boss.png' alt='' />

                <figcaption>
                  <h5 className={s.name}>Алиев Азиз Алиевич</h5>
                  <p className={s.email}>info@uznature.uz</p>
                </figcaption>
              </figure>

              <article className={`${s.rightDesc} d-flex-col`}>
                <h6 className={s.job}>
                  Советник Министра экологии, охраны окружающей среды и
                  изменения климата Республики Узбекистан
                </h6>

                <p className={s.time}>
                  Приемные дни: Пятница Время приема: 10:00 - 12:00
                </p>

                <p className={s.desc}>
                  Прием производится по следующему адресу: г. Ташкент,
                  Чиланзарский район, проспект Бунёдкор, дом 7-А <br /> Телефон:
                  (внут. 1157#)
                </p>
              </article>
            </div>
          ))}
        </div>

        <Button
          sx={{ margin: '50px auto 0', display: 'block' }}
          color='success'
        >
          Смотреть всех
        </Button>
      </div>
    </section>
  );
};

export default Bosses;
