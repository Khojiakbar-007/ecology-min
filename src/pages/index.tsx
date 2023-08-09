import Head from 'next/head';
import Hero from 'widgets/home/Hero';
import LatestNews from 'widgets/new/LatestNews';

const Home = () => {
  return (
    <>
      <Head>
        <title>Ecology - Home</title>
      </Head>
      <Hero />
      <LatestNews />
    </>
  );
};

export default Home;
