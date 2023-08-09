import React from 'react';
import s from './latestNews.module.scss';
import { Button, IconButton, SxProps } from '@mui/material';
import Slider, { Settings } from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { BsArrowRightShort } from 'react-icons/bs';

const sharedArrowStyles: SxProps = {
  position: 'absolute',
  top: '50%',
  zIndex: 50,
  width: '52px',
  height: '52px',
  display: 'flex !important',
  justifyContent: 'center',
  alignItems: 'center',

  background: 'var(--white)',
  boxShadow: '0px 4px 21px rgba(0, 0, 0, 0.10)',
  color: 'var(--black)',
  transition: 'all 0.3s',
  fontSize: '20px',

  '&:hover': {
    background: '#fbfbfb',
  },
};

const PrevArrow = ({ className, ...rest }: any) => {
  return (
    <IconButton
      {...rest}
      sx={{
        ...sharedArrowStyles,
        transform: 'translate(-50%, -50%)',
        left: '8px',
      }}
    >
      <FaChevronLeft />
    </IconButton>
  );
};
const NextArrow = ({ className, ...rest }: any) => {
  return (
    <IconButton
      {...rest}
      sx={{
        ...sharedArrowStyles,
        transform: 'translate(50%, -50%)',
        right: '8px',
      }}
    >
      <FaChevronRight />
    </IconButton>
  );
};

const settings: Settings = {
  dots: true,
  infinite: true,
  // arrows: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,

  responsive: [
    {
      breakpoint: 1430,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
  ],
};

const LatestNews = () => {
  return (
    <section className={s.latestNews}>
      <div className={`container-fluid`}>
        <p className={s.beforeTitle}>Важные события</p>
        <h2 className={s.title}>Последние новости</h2>

        <div className={`${s.newsCont}`}>
          <Slider {...settings}>
            {Array(5)
              .fill(1)
              .map((_, i) => (
                <div className={`${s.new}`}>
                  <figure className={`${s.imgCont}`}>
                    <img
                      className='coverImage'
                      src='./images/news/pres-img.webp'
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
