// pages/_app.js
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { appWithTranslation } from 'next-i18next';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} antialiased`}>
      <Component {...pageProps} />
    </div>
  );
}

export default appWithTranslation(MyApp);
