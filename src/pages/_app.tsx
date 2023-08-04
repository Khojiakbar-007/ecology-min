import { ThemeProvider, createTheme } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'styles/index.scss';
import Footer from 'widgets/footer';
import Header from 'widgets/header';

const theme = createTheme({
  typography: {
    fontFamily: `"Inter", sans-serif`,
  },
  palette: {
    primary: {
      main: '#3366FF',
      dark: '#144fff',
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Ecology</title>
          <link rel='icon' href='/logo.png' />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
