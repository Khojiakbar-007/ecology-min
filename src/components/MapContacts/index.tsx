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
              <p className={s.value}>+(99871) 207-07-70</p>
            </div>
            <div className={s.field}>
              <p className={s.name}>Короткий номер</p>
              <p className={s.value}>1157</p>
            </div>
            <div className={s.field}>
              <p className={s.name}>Телефон доверия</p>
              <p className={s.value}>(+99871) 207-07-70 (1013#)</p>
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
              <p className={s.value}>info@eco.gov.uz</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapContacts;
