import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { ListItem } from '../Technologies/TechnologiesStyles';
import { DiGoogleDrive, DiMysql } from 'react-icons/di';

const Hero = (props) => (
  <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
      Welcome to <br/>
      Aditya Singh's Portfolio
     </SectionTitle>
     <SectionText>
      Hi, my name is Aditya Singh and I'm an engineering student who has an 
      inclination for web development. My goal is to become a full stack developer.
     </SectionText>
     <ListItem>
     <Button onClick={()=> window.location="https://drive.google.com/file/d/1lLARa2lE20ovmyTrbYRZFTeH9lpg2twA/view"}>Resume/CV</Button>
     </ListItem> 
   </LeftSection>
  </Section>
);

export default Hero;