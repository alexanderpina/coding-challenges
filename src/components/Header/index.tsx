import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/assets/logo-coding-challenges.svg'
import Styled from './styles'

const Header = () =>
  <header>
    <Styled.H1>
      <img
        alt="Logo Coding Challenges"
        src={Logo}
      />
    </Styled.H1>
  </header>


export default Header;
