import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bienvenue sur <br/>
        Mon Site 
      </SectionTitle>
      <SectionText>
        Le but de mon site est de montrer mes différentes réalisations et ainsi de vous proposer mes services dans vos projets de création sur Internet. 
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>En voir plus</Button>
    </LeftSection>
  </Section>
);

export default Hero;