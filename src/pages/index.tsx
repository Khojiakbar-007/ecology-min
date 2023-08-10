import Head from 'next/head';
import SendMessage from 'widgets/contacts/ContactInfo/SendMessage';
import Bosses from 'widgets/home/Bosses';
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
      <Bosses />
      <SendMessage />
      <img
        style={{ display: 'block' }}
        src='/images/home/home-game.webp'
        alt=''
      />
    </>
  );
};

export default Home;
