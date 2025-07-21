import Hero from '../components/Hero';
import WhatYouReceive from '../components/WhatYouReceive';
import ExpertCredentials from '../components/ExpertCredentials';
import WorkingProcess from '../components/WorkingProcess';
import FAQ from '../components/FAQ';
import LatestBlogs from '../components/LatestBlogs';

export default function Home() {
  return (
    <>
      <Hero />
      <WorkingProcess />
      <WhatYouReceive />
      <ExpertCredentials />
      <FAQ />
      <LatestBlogs />
    </>
  );
}
