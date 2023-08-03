import React from 'react';
import ContactInfo from 'widgets/contacts/ContactInfo';
import ContactMap from 'widgets/contacts/ContactMap';

const Contacts = () => {
  return (
    <>
      <ContactMap />
      <ContactInfo />
    </>
  );
};

export default Contacts;
