import React from 'react';
import s from './worker-card.module.scss';
import manageImg from 'shared/assets/about/manage-img.jpg';
import { IWorkerType } from 'shared/managementData';
import { formatPhone } from 'utils';

import placeholderImg from 'shared/assets/placeholder/user-place-img.png';

interface IProps {
  data: IWorkerType;
}

const WorkerCard = ({ data }: IProps) => {
  return (
    <section className={`${s.card} d-flex-row-top`}>
      <figure className={s.imgCont}>
        <img
          className='coverImage'
          src={data.img || placeholderImg.src}
          onError={event => {
            // @ts-ignore
            event.target.src = placeholderImg.src;
            // @ts-ignore
            event.onerror = null;
          }}
          alt=''
        />
      </figure>

      <article className={`${s.desc} d-flex-col`}>
        <h4 className={s.name}>{data.name}</h4>
        <div className={s.detail}>Lavozim - {data.position}</div>
        <div className={s.detail}>
          Telefon -{' '}
          {data.phoneNumber?.map(phone => (
            <a key={phone} href={`tel:${phone}`}>
              {formatPhone(phone)}{' '}
            </a>
          ))}
        </div>
        <div className={s.detail}>
          Elektron pochta - <a href={`mailto:${data.email}`}>{data.email}</a>
        </div>
      </article>
    </section>
  );
};

export default WorkerCard;
