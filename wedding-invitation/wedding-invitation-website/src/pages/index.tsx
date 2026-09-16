import Head from 'next/head';
import Header from '../components/Header';
import InvitationCard from '../components/InvitationCard';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ashwarya & Deepak's Wedding</title>
        <meta name="description" content="Wedding invitation for Ashwarya & Deepak" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen flex flex-col items-center">
        <Header />
        <InvitationCard />
        <Footer />
      </main>
    </>
  );
}