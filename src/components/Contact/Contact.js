// import Facebook from "../../assets/facebook-square-brands.svg";
// import LinkedIn from "../../assets/linkedin.svg";
// import Twitter from "../../assets/twitter-square-brands.svg";
// import Instagram from "../../assets/instagram-square-brands.svg";

import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import TextareaAutosize from 'react-textarea-autosize';



import {ContactSection, Title, Icons, Form, Row} from './ContactStyles';
import { LeftSection } from '../Hero/HeroStyles';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { SocialIcons, Div3 } from '../Header/HeaderStyles';
import Button from '../../styles/GlobalComponents/Button';


const Contact = () => {
  return (

    <ContactSection id="contact">
      <LeftSection >
        <SectionTitle>Contact</SectionTitle>
          <SectionText>
            Contactez-moi mes loups. 
          </SectionText>

          <Icons>
            <SocialIcons href="https://www.linkedin.com/in/paul-benetier/">
              <AiFillLinkedin size="3rem"/>
            </SocialIcons>
            <SocialIcons href="https://github.com/bentarr">
              <AiFillGithub size="3rem"/>
            </SocialIcons>
          </Icons>

          <Form>
            <Row>
              <input 
                name="name" 
                type="text" placeholder="Votre nom ?" 
                autocomplete="off" 
              />
              <input
                name="email"
                type="email"
                placeholder="Votre e-mail ?"
                autocomplete="off"
              />
            </Row>
            <TextareaAutosize 
              name=""
              id=""
              minRows="5"
              cols="30"
              rows="5"
              placeholder="Quelle est votre demande ? "
            />
            <Button>Me contacter</Button>
          </Form>
        
      </LeftSection> 
    </ContactSection> 
  );
};

export default Contact;