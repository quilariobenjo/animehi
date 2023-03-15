import Header from '@/components/layout/Header';
import Main from '@/components/layout/Main';
import Footer from '@/components/layout/Footer';
import Banner from '@/components/banner';

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-background">
      <Header />
      <Banner />
      <Main />
      <Footer />
    </div>
  );
}
