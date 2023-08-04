import React from 'react';

import s from './mapContacts.module.scss';

interface IMapContactsProps {
  selRegion: string;
}

const MapContacts = ({ selRegion }: IMapContactsProps) => {
  return (
    <>
      <h2 className={s.title}>{selRegion}</h2>

      <div className={`${s.contactInfo} d-flex-col`}>
        <div className={`${s.row} d-flex-row-top`}>
          <div className={s.icon}>
            <img src='./icons/phone-call.svg' alt='phone calling icon' />
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
            <img src='./icons/email.svg' alt='email icon' />
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
    </>
  );
};

export default MapContacts;
