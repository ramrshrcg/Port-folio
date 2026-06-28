import {FC, lazy, memo, Suspense} from 'react';

import About from './components/Sections/About';
import Certificates from './components/Sections/certificates';
import Contact from './components/Sections/Contact';
import Footer from './components/Sections/Footer';
import Hero from './components/Sections/Hero';
import Page from './components/Layout/Page';
import Portfolio from './components/Sections/Portfolio';
import Resume from './components/Sections/Resume';
import {homePageMeta} from './data/data';

// Lazy load the Header since it uses browser-only APIs (IntersectionObserver)
const Header = lazy(() => import('./components/Sections/Header'));

const App: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Suspense fallback={null}>
        <Header />
      </Suspense>
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Certificates />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </Page>
  );
});

App.displayName = 'App';
export default App;
