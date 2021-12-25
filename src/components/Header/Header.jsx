import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';
  
const Header = () => ( 
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: 'white'}}>
          <Span>paulBen</Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href="#about">
          <NavLink> À propos </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink> Projets </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <NavLink> Contact </NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons target="_blank" href="https://www.linkedin.com/in/paul-benetier/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons target="_blank" href="https://github.com/bentarr">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
