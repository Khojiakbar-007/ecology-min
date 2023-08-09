import { ThemeProvider, createTheme } from '@mui/material';
import GlobalContextProvider from 'context/GlobalContext';
import Head from 'next/head';
import Footer from 'widgets/footer';
import Header from 'widgets/header';

import type { AppProps } from 'next/app';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'styles/index.scss';

const theme = createTheme({
  typography: {
    fontFamily: `"Inter", sans-serif`,
  },
  palette: {
    primary: {
      main: '#3366FF',
      dark: '#144fff',
    },
    success: {
      main: '#6CC21B',
      dark: '#58b105',
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalContextProvider>
          <Head>
            <title>Ecology</title>
            <meta name='description' content='Created by Rochwin company' />
            <link rel='icon' href='/favicon.ico' />
          </Head>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </GlobalContextProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
