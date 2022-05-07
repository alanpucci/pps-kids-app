import React, { FC, useState } from 'react'
import { Control, Controller } from 'react-hook-form'
import Input from '../../atoms/Input/Input.component'
import { View, TextInputProps } from 'react-native';
import { StyledErrorText } from './ControlledPasswordInput.styled';
import { TextInput } from 'react-native-paper';

interface ControlledInputProps extends TextInputProps{
  control:Control<any,any>;
  name:string;
  required?:boolean;
  error?:any;
  style?:any;
}

const ControlledPasswordInput:FC<ControlledInputProps> = ({control,name,required, error, style,...props}) => {
  const [secure, setSecure] = useState(true)
  return (
      <Controller 
          control={control}
          rules={{required:required}}
          render={({ field: { onChange, onBlur, value } }) => (
              <Input style={style}
                right={<TextInput.Icon style={{marginTop:20}} name={secure?"eye":"eye-off"} onPress={()=>setSecure(!secure)} />}
                secureTextEntry={secure}
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

export default ControlledPasswordInput