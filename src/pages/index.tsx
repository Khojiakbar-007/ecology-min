import Head from 'next/head';
import EcoAct from 'widgets/home/EcoAct';
import Hero from 'widgets/home/Hero';
import HomeServices from 'widgets/home/HomeServices';
import LatestNews from 'widgets/new/LatestNews';

const Home = () => {
  return (
    <>
      <Head>
        <title>Ecology - Home</title>
      </Head>
      <Hero />
      <LatestNews />
      <EcoAct />
      <HomeServices />
    </>
  );
};

export default Home;
