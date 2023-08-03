import React, { useState } from 'react';
import s from './contactMap.module.scss';
import UzbMap from 'components/UzbMap';
import MapContacts from 'components/MapContacts';

const ContactMap = () => {
  const [selRegion, setSelRegion] = useState('Toshkent');

  return (
    <section className={s.contactMap}>
      <div className={`${s.cont} container-fluid d-flex-row-start`}>
        <UzbMap selRegion={selRegion} setSelRegion={setSelRegion} />
        <div className={`${s.contactsCont} d-flex-col`}>
          <MapContacts selRegion={selRegion} />
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
