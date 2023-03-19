import Layout from '@/components/layout/Layout';
import ClientOnly from '@/components/shared/ClientOnly';

import Main from '@/components/layout/Main';
import Footer from '@/components/layout/Footer';
import Banner from '@/components/banner';
import React from 'react';

const Home = () => {
  return (
    <ClientOnly>
      <Layout>
        <Banner />
        <Main />
        <Footer />
      </Layout>
    </ClientOnly>
  );
};

export default Home;
