import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import Projects from '../Projects/Projects';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section nopadding>
      <SectionTitle main center>
        Paul Bénétier,<br/>
        au coeur de vos envies digitales
      </SectionTitle>
      <SectionText>
        Le but de mon site est de montrer mes différentes réalisations et ainsi de vous proposer mes services dans vos projets de création sur Internet. 
      </SectionText>
      <Button onClick={() => window.location ='#projects'}>En voir plus</Button>
  </Section>
);

export default Hero;