import React from 'react';
import { DiCssTricks, DiFirebase, DiReact, DiDjango, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a substantial amount of technologies related to web development(From backend to front end).
      Having a good understanding CSS,HTML,Javascript has helped me a lot in making React Websites.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front End</ListTitle>
          <ListParagraph>Experience with front-end library such as React JS, HTML, CSS and Bootstrap</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Back End</ListTitle>
          <ListParagraph>Experience with backend technologies like MYSQL,MongoDB and Firebase.</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCssTricks size='3rem' />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>Experience with tools like Figma</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDjango size='3rem' />
        <ListContainer>
          <ListTitle>FrameWorks</ListTitle>
          <ListParagraph>Experience with frameworks like Express and Django</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
