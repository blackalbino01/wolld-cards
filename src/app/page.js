import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import GiftCardGrid from '../components/GiftCardGrid';
import PaymentMethods from '../components/PaymentMethods';
import InstantCheer from '../components/InstantCheer';
import AppDownload from '../components/AppDownload';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <GiftCardGrid />
      <PaymentMethods />
      <InstantCheer />
      <AppDownload />
      <Footer />
    </main>
  );
}
