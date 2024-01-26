import Footer from '@/components/Navber/Footer';
import Navber from '@/components/Navber/Navber';
import Shikbo from '@/components/Navber/Shikbo';
import '@/styles/globals.css'

import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
    
    <Shikbo/>
      <Component {...pageProps} />
      <Footer/>
    </SessionProvider>
  );
}

export default MyApp;
