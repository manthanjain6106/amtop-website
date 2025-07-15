import TopNotificationBar from '../components/TopNotificationBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhatYouReceive from '../components/WhatYouReceive';
import ExpertCredentials from '../components/ExpertCredentials';
import WorkingProcess from '../components/WorkingProcess';
import FAQ from '../components/FAQ';
import LatestBlogs from '../components/LatestBlogs';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopNotificationBar />
      <Navbar />
      <Hero />
      <WhatYouReceive />
      <ExpertCredentials />
      <WorkingProcess />
      <FAQ />
      <LatestBlogs />
      <Footer />
      </main>
  );
}
