import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';
  
const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a>
          <DiCssdeck size="3rem"/> <span>Portfolio</span>
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
        <Link href="#tech">
          <NavLink> Technologies </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#avis">
          <NavLink> Avis </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <NavLink> Contact </NavLink>
        </Link>
      </li>
    </Div2>  
  </Container>
);

export default Header;
