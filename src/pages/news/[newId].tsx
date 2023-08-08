import React from 'react';
import SendMessage from 'widgets/contacts/ContactInfo/SendMessage';
import New from 'widgets/new/New';
import LatestNews from 'widgets/new/LatestNews';

const NewPage = () => {
  return (
    <>
      <New />
      <LatestNews />
      <SendMessage />
    </>
  );
};

export default NewPage;
