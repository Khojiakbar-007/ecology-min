import { useRouter } from 'next/router';
import React from 'react';

const New = () => {
  const params = useRouter();
  console.log('router params:', params);
  return (
    <>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
        dignissimos modi eos dicta deleniti dolor sunt nobis in expedita, earum
        debitis quaerat possimus quisquam nam deserunt eum. Maiores,
        reprehenderit impedit? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Neque dignissimos modi eos dicta deleniti dolor sunt
        nobis in expedita, earum debitis quaerat possimus quisquam nam deserunt
        eum. Maiores, reprehenderit impedit? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Neque dignissimos modi eos dicta deleniti
        dolor sunt nobis in expedita, earum debitis quaerat possimus quisquam
        nam deserunt eum. Maiores, reprehenderit impedit? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Neque dignissimos modi eos dicta
        deleniti dolor sunt nobis in expedita, earum debitis quaerat possimus
        quisquam nam deserunt eum. Maiores, reprehenderit impedit? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Neque dignissimos modi eos
        dicta deleniti dolor sunt nobis in expedita, earum debitis quaerat
        possimus quisquam nam deserunt eum. Maiores, reprehenderit impedit?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
        dignissimos modi eos dicta deleniti dolor sunt nobis in expedita, earum
        debitis quaerat possimus quisquam nam deserunt eum. Maiores,
        reprehenderit impedit? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Neque dignissimos modi eos dicta deleniti dolor sunt
        nobis in expedita, earum debitis quaerat possimus quisquam nam deserunt
        eum. Maiores, reprehenderit impedit?11111111111111111111111
      </div>
      <h2>{params?.query?.newId}</h2>
    </>
  );
};

export default New;
