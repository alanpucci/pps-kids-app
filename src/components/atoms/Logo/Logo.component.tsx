import React from 'react'
import Image from '../Image/Image.component'
import { StyledLogo } from './Logo.styled';

const Logo = () => {
  return (
    <StyledLogo 
      source={require('../../../../assets/kids.gif')}
    /> 
  )
}

export default Logo