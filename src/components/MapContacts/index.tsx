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
            <img src='./icons/phone-call.svg' alt='' />
          </div>
          <div className={`${s.contacts} d-flex-col`}>
            <div className={s.field}>
              <div className={s.name}>Контакты</div>
              <div className={s.value}>+(99871) 207-07-70</div>
            </div>
            <div className={s.field}>
              <div className={s.name}>Короткий номер</div>
              <div className={s.value}>1157</div>
            </div>
            <div className={s.field}>
              <div className={s.name}>Телефон доверия</div>
              <div className={s.value}>(+99871) 207-07-70 (1013#)</div>
            </div>
          </div>
        </div>

        <div className={`${s.row} d-flex-row-top`}>
          <div className={s.icon}>
            <img src='./icons/email.svg' alt='' />
          </div>
          <div className={`${s.contacts} d-flex-col`}>
            <div className={s.field}>
              <div className={s.name}>Почта</div>
              <div className={s.value}>info@eco.gov.uz</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapContacts;
