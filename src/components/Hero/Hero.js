import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
      Welcome to <br/>
      My Personal Portfolio
     </SectionTitle>
     <SectionText>
      Hi, my name is Aditya Singh and I'm an aspiring full stack developer
     </SectionText>
     <Button onClick={()=> window.location="https://drive.google.com/file/d/1lLARa2lE20ovmyTrbYRZFTeH9lpg2twA/view"}>Learn More</Button>
   </LeftSection>
  </Section>
);

export default Hero;