import React, { FC } from 'react'
import { StyledButtonContainer, StyledRoundedButtonContainer, StyledView } from './LoginController.styled'
import Heading from '../../atoms/Heading/Heading.component';
import Button from '../../atoms/Button/Button.component';
import { Control, FieldError } from 'react-hook-form';
import { FormData } from '../../screens/LoginScreen/LoginScreen.component';
import ControlledInput from '../../molecules/ControlledInput/ControlledInput.component';
import ControlledPasswordInput from '../../molecules/ControlledPasswordInput/ControlledPasswordInput.component';
import AwesomeButton from '../../atoms/AwesomeButton/Button.component';
import FlashMessage from 'react-native-flash-message';
import { View } from 'react-native';

interface LoginControllerProps{
  control:Control<FormData, any>;
  handleSubmit:()=>void;
  errors?:{email?:FieldError|undefined,password?:FieldError|undefined};
  isVisible:boolean;
  openRegister:()=>void;
  fastSignIn:(data:FormData)=>void;
}

const LoginController:FC<LoginControllerProps> = ({isVisible, control,handleSubmit, errors, openRegister, fastSignIn}) => {
  return (
      <StyledView >
          <Heading color="primary">Inicio rápido</Heading>
          <StyledRoundedButtonContainer>
            <AwesomeButton backgroundDarker="#ec6a9c" textSize={15} textColor="#ec6a9c" backgroundColor="white" type="primary" width={90} height={60} rounded onPress={()=>fastSignIn({email:"admin@gmail.com", password:"Admin1234"})}>Admin</AwesomeButton>
            <AwesomeButton backgroundDarker="#ec6a9c" textSize={15} textColor="#ec6a9c" backgroundColor="white" type="primary" width={90} height={60} rounded onPress={()=>fastSignIn({email:"tecnico@gmail.com", password:"Tecnico1234"})}>Tecnico</AwesomeButton>
            <AwesomeButton backgroundDarker="#ec6a9c" textSize={15} textColor="#ec6a9c" backgroundColor="white" type="primary" width={90} height={60} rounded onPress={()=>fastSignIn({email:"cliente@gmail.com", password:"Cliente1234"})}>Cliente</AwesomeButton>
          </StyledRoundedButtonContainer>
            <ControlledInput required autoCapitalize='sentences' name="email" placeholder='Email' control={control} />
            <ControlledPasswordInput required style={{borderBottomEndRadius:35, borderBottomStartRadius:35, 
                            borderBottomColor:'pink', borderBottomWidth:3, 
                            borderRightColor:'pink', borderRightWidth:3, 
                            borderLeftColor:'pink', borderLeftWidth:3}}
                            autoCapitalize='none' name="password" placeholder='Password' control={control} />
            <StyledButtonContainer>
            <Button onPress={handleSubmit} size='xl'>Ingresar</Button>
            <Button variant='tertiary' size='xl' onPress={openRegister}>¿No estás registrado?</Button>
          </StyledButtonContainer>
      </StyledView>
  )
}

export default LoginController