import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
     <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:9595136360">9595136360</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto: adityasinghh109@gmail.com">adityasinghh109@gmail.com</LinkItem>
      </LinkColumn>
     </LinkList>
     <SocialIconsContainer>
       <CompanyContainer>
       <SocialIcons href="https://github.com/Aditya11099">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/aditya-singh-8b44901aa/">
          <AiFillLinkedin size="3rem" />
          </SocialIcons>
       </CompanyContainer>
       </SocialIconsContainer> 
    </FooterWrapper>
  );
};

export default Footer;
