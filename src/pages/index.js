import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Contact from '../components/Contact/Contact';
import Hero from '../components/Hero/Hero';
import Pricing from '../components/Pricing/Pricing';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Timeline />
      <Projects />
      <Pricing></Pricing>
      <Section nopadding grid>
          <Contact />
          <BgAnimation /> 
      </Section> 
    </Layout>
  );
};

export default Home;
