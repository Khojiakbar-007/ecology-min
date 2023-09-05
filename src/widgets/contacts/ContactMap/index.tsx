import React, { useState } from 'react';
import s from './contactMap.module.scss';
import UzbMap from 'components/uzb-map';
import MapContacts from 'components/map-contacts';

const ContactMap = () => {
  const [selRegion, setSelRegion] = useState(10);

  return (
    <section className={s.contactMap}>
      <div className={`${s.cont} container-fluid d-flex-row-start`}>
        <figure className={s.map}>
          <UzbMap selRegion={selRegion} setSelRegion={setSelRegion} />
        </figure>
        <div className={`${s.contactsCont} d-flex-col`}>
          <MapContacts selRegion={selRegion} />
        </div>
      </div>
      <div className={s.decorImgCont}>
        <img src='/images/decor-left.webp' alt='' />
      </div>
    </section>
  );
};

export default ContactMap;
