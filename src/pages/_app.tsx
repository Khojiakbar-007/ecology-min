import { ThemeProvider, createTheme } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'styles/index.scss';

const theme = createTheme({
  typography: {
    fontFamily: `"Inter", sans-serif`,
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
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
