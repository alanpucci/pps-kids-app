import React, { FC } from 'react'
import { TextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput';
import { StyledInput } from './Input.styled';

const Input:FC<TextInputProps> = ({...props}) => {
  return (
    <StyledInput mode="flat"
      underlineColor="pink"
      activeUnderlineColor='pink'
      {...props}
    />
  )
}

export default Input