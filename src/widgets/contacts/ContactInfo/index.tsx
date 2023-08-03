import React from 'react';
import s from './contactInfo.module.scss';

const ContactInfo = () => {
  return (
    <section className={s.contactInfo}>
      <div className={`${s.cont} container-fluid d-flex-row`}>
        <div className={`${s.col}`}>
          <div className={s.title}>Адрес</div>
          <div className={s.info}>
            Узбекистан, г. Навои, ул. Садриддин Айний, д. 27 (ориентир: здание
            Центра государственных услуг, 4 этаж; областная Прокуратура;)
          </div>
        </div>
        <div className={`${s.col}`}>
          <div className={s.title}>Адрес</div>
          <div className={`${s.info} ${s.withMarg}`}> (+998) 79 220-61-65</div>
          <div className={s.title}>Факс</div>
          <div className={s.info}>(+998) 79 220-61-69</div>
        </div>
        <div className={`${s.col}`}>
          <div className={s.title}>Режим работы</div>
          <div className={s.info}>
            9:00 - 18:00 <br />
            Обед: <br />
            13:00 - 14:00 <br />
            Выходные: <br />
            Суббота, Воскресенье
          </div>
        </div>
        <div className={`${s.col} ${s.colPlaceholder}`} />
        <div className={s.imgCont}>
          <img src='./images/contacts-globe.svg' alt='green globe svg' />
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
