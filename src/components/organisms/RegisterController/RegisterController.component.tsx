import React, { FC } from 'react'
import { StyledModal, StyledView } from './RegisterController.styled'
import Heading from '../../atoms/Heading/Heading.component';
import Button from '../../atoms/Button/Button.component';
import { Control, FieldError } from 'react-hook-form';
import { FormData } from '../../screens/LoginScreen/LoginScreen.component';
import ControlledInput from '../../molecules/ControlledInput/ControlledInput.component';
import ControlledPasswordInput from '../../molecules/ControlledPasswordInput/ControlledPasswordInput.component';
import FlashMessage from 'react-native-flash-message';

interface LoginControllerProps{
  control:Control<FormData, any>;
  handleSubmit:()=>void;
  errors?:{email?:FieldError|undefined,password?:FieldError|undefined,passwordRepeat?:FieldError|undefined};
  isVisible:boolean;
  closeModal:()=>void;
}

const RegisterController:FC<LoginControllerProps> = ({isVisible, control,handleSubmit, errors, closeModal}) => {
  return (
    <StyledModal swipeDirection="down" hasBackdrop={false} isVisible={isVisible} onSwipeComplete={closeModal} > 
      <StyledView >
          <Heading color="secondary">REGISTRARSE</Heading>
          <ControlledInput required autoCapitalize='none' name="email" placeholder='Email' control={control} />
          <ControlledPasswordInput required style={{ 
                          borderRightColor:'pink', borderRightWidth:3, 
                          borderLeftColor:'pink', borderLeftWidth:3}} autoCapitalize='none' name="password" placeholder='Contraseña' control={control} />
          <ControlledPasswordInput required style={{borderBottomEndRadius:35, borderBottomStartRadius:35, 
                          borderBottomColor:'pink', borderBottomWidth:3, 
                          borderRightColor:'pink', borderRightWidth:3, 
                          borderLeftColor:'pink', borderLeftWidth:3}} autoCapitalize='none' name="passwordRepeat" placeholder='Repetir contraseña' control={control} />
          <Button size="xl" onPress={handleSubmit}>Registrar</Button>
          <Button size="xl" variant='secondary' onPress={closeModal}>Cancelar</Button>
      </StyledView>
    </StyledModal>
  )
}

export default RegisterController