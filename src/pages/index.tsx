import Head from 'next/head';
import Hero from 'widgets/home/Hero';

const Home = () => {
  return (
    <>
      <Head>
        <title>Ecology - Home</title>
        <meta name='description' content='Created by Rochwin company' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
    </>
  );
};

export default Home;
