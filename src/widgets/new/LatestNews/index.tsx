import React from 'react';
import s from './latestNews.module.scss';
import { Button } from '@mui/material';
import Slider from 'react-slick';
import { BsArrowRightShort } from 'react-icons/bs';
import { settings } from './carouselSettings';

const LatestNews = () => {
  return (
    <section className={s.latestNews}>
      <div className={`container-fluid`}>
        <p className={s.beforeTitle}>Важные события</p>
        <h2 className={s.title}>Последние новости</h2>

        <div className={s.leftVertMessage}>Sanitation</div>

        <div className={`${s.newsCont}`}>
          <Slider {...settings}>
            {Array(5)
              .fill(1)
              .map((_, i) => (
                <div key={i} className={`${s.new}`}>
                  <figure className={`${s.imgCont}`}>
                    <img
                      className='coverImage'
                      src='/images/news/pres-img.webp'
                      alt=''
                    />
                  </figure>
                  <div className={s.horLine} />
                  <time className={s.time} dateTime='2023-08-04T19:00:00.000Z'>
                    04.08.2023
                  </time>
                  <h4 className={s.newTitle}>
                    Незаконная рыбалка в Джизакской области нанесла ущерб
                    природе на сумму 57 млн 750 тыс. сумов
                  </h4>
                  <p className={s.newDesc}>
                    В рамках сегмента высокого уровня мероприятия, состоявшемся
                    28 февраля Председатель
                  </p>
                  <Button
                    sx={{
                      color: 'var(--white)',
                      borderRadius: '8px',
                      width: '150px',
                      fontSize: '18px',
                      fontWeight: 500,
                      textTransform: 'capitalize',
                      textAlign: 'left',
                      svg: {
                        marginLeft: '18px',
                        transition: 'all 0.2s',
                      },
                      '&:hover svg': {
                        marginLeft: '25px',
                        marginRight: '-7px',
                      },
                    }}
                    color='success'
                    variant='contained'
                  >
                    Читать{' '}
                    <BsArrowRightShort
                      style={{
                        fontSize: '30px',
                        // marginLeft: '18px',
                      }}
                    />
                  </Button>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
