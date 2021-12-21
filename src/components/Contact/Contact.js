// import Facebook from "../../assets/facebook-square-brands.svg";
// import LinkedIn from "../../assets/linkedin.svg";
// import Twitter from "../../assets/twitter-square-brands.svg";
// import Instagram from "../../assets/instagram-square-brands.svg";

import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import {ContactSection, Title, Icons, Form, Row} from './ContactStyles';
import { LeftSection } from '../Hero/HeroStyles';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { SocialIcons, Div3 } from '../Header/HeaderStyles';
import Button from '../../styles/GlobalComponents/Button';


const Contact = () => {
  return (

    <Section id="contact">
      <LeftSection >
        <SectionTitle>Contact</SectionTitle>
          <SectionText>
            Contactez-moi mes loups. 
          </SectionText>
      
        

        <ContactSection>
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
              <input name="name" type="text" placeholder="your name" />
              <input
                name="email"
                type="email"
                placeholder="enter working email id"
              />
            </Row>
            <textarea
              name=""
              id=""
              cols="30"
              rows="2"
              placeholder="your message"
            ></textarea>

            <Button>Me contacter</Button>

          </Form>
        </ContactSection>
        
        
        
      </LeftSection>
      

      
    </Section>
    
    // <ContactSection id="contact">
    //   <Title>Get in touch</Title>
    //   {/* <Text>Lorem ipsum dolor sit amet, consectetur adipisicing.</Text> */}

    //   <Div3>
    //     <SocialIcons href="https://www.linkedin.com/in/paul-benetier/">
    //       <AiFillLinkedin size="3rem"/>
    //     </SocialIcons>
    //     <SocialIcons href="https://github.com/bentarr">
    //       <AiFillGithub size="3rem"/>
    //     </SocialIcons>
    //   </Div3>


    //   <Icons>
    //     <a href="https://www.facebook.com/">
    //       {" "}
    //       <img src={Facebook} alt="Facebook" />
    //     </a>
    //     <a href="https://www.linkedin.com//">
    //       <img src={LinkedIn} alt="LinkedId" />
    //     </a>
    //     <a href="https://twitter.com/">
    //       <img src={Twitter} alt="Twitter" />
    //     </a>
    //     <a href="https://www.instagram.com/">
    //       <img src={Instagram} alt="Instagram" />
    //     </a>
    //   </Icons>
    //   <Form>
    //     <Row>
    //       <input name="name" type="text" placeholder="your name" />
    //       <input
    //         name="email"
    //         type="email"
    //         placeholder="enter working email id"
    //       />
    //     </Row>
    //     <textarea
    //       name=""
    //       id=""
    //       cols="30"
    //       rows="2"
    //       placeholder="your message"
    //     ></textarea>
    //     <div style={{ margin: "0 auto" }}>
    //       <button
    //         onClick={(e) => {
    //           e.preventDefault();
    //         }}
    //       >
    //         Submit
    //       </button>
    //     </div>
    //   </Form>
    // </ContactSection>
  );
};

export default Contact;