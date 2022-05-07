import React, { FC } from 'react'
import { Control, Controller } from 'react-hook-form'
import Input from '../../atoms/Input/Input.component'
import { View, TextInputProps } from 'react-native';
import { StyledErrorText } from './ControlledInput.styled';

interface ControlledInputProps extends TextInputProps{
  control:Control<any,any>;
  name:string;
  required?:boolean;
  error?:any;
}

const ControlledInput:FC<ControlledInputProps> = ({control,name,required, error,...props}) => {
  return (
      <Controller 
          control={control}
          rules={{required:required}}
          render={({ field: { onChange, onBlur, value } }) => (
              <Input style={{borderTopEndRadius:35, borderTopStartRadius:35,
                        borderTopColor:'pink', borderTopWidth:3, 
                        borderRightColor:'pink', borderRightWidth:3, 
                        borderLeftColor:'pink', borderLeftWidth:3}}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                {...props}
              />
              )}
          name={name}
      />
  )
}

export default ControlledInput