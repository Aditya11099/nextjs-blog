import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 6, text: 'Projects'},
  { number: 16, text: 'Courses and Licenses', },
  { text : 'Web Developer Intern for 3months',  },
  { number: 5, text: 'Workshops Completed', }
];



const Acomplishments = () => (
 <Section>
   <SectionTitle>Personal Accomplishments</SectionTitle>
   <Boxes>
     {data.map((card,index)=> (
     <Box key={index}>
       <BoxNum>{card.number}</BoxNum>
       <BoxText>{card.text}</BoxText>
     </Box>
     ))}
   </Boxes>
 </Section>
 
);

export default Acomplishments;
