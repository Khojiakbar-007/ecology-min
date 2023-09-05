import React, { Fragment } from 'react';

import s from './mapContacts.module.scss';
import { IWorkerType, managementData } from 'shared/managementData';
import { formatPhone } from 'utils';

interface IMapContactsProps {
  selRegion: number;
}

const MapContacts = ({ selRegion }: IMapContactsProps) => {
  const { email, region, phoneNumber } = managementData.find(
    reg => reg.regionId === selRegion
  ) as IWorkerType;
  return (
    <>
      <h2 className={s.title}>{region}</h2>

      <div className={`${s.contactInfo} d-flex-col`}>
        <div className={`${s.row} d-flex-row-top`}>
          <div className={s.icon}>
            <img src='/icons/phone-call.svg' alt='phone calling icon' />
          </div>
          <div className={`${s.contacts} d-flex-col`}>
            <div className={s.field}>
              <p className={s.name}>Контакты</p>
              {/* <a className={s.value} href='tel:998712683448'>
                +(99871) 268-34-48
              </a> */}
              {phoneNumber?.map((phone, i) => (
                <Fragment key={phone}>
                  <a className={s.value} href={`tel:${phone}`}>
                    {formatPhone(phone)}
                  </a>
                  {phoneNumber.length >= 2 ? <br /> : ''}
                </Fragment>
              ))}
            </div>
            <div className={s.field}>
              <p className={s.name}>Короткий номер</p>
              <a className={s.value} href='tel:0000'>
                0000
              </a>
            </div>
            <div className={s.field}>
              <p className={s.name}>Телефон доверия</p>
              <a className={s.value} href='tel:998990000000'>
                (+99871) 000-00-00
              </a>
            </div>
          </div>
        </div>

        <div className={`${s.row} d-flex-row-top`}>
          <div className={s.icon}>
            <img src='/icons/email.svg' alt='email icon' />
          </div>
          <div className={`${s.contacts} d-flex-col`}>
            <div className={s.field}>
              <p className={s.name}>Почта</p>
              {/* <a href='mailto:respublikamarkazi@exat.uz' className={s.value}>
                respublikamarkazi@exat.uz
              </a> */}
              <a href={`mailto:${email}`} className={s.value}>
                {email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapContacts;
