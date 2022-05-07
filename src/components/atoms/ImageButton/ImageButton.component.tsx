import React, { FC } from 'react'
import { ImageSourcePropType, View } from 'react-native';
import AwesomeButton from '../AwesomeButton/Button.component'
import { StyledImage, StyledViewColor } from './ImageButton.styled';

interface ImageButtonProps{
    onPress:()=>void;
    src?:ImageSourcePropType;
    color?:string;
}

const ImageButton:FC<ImageButtonProps> = ({onPress,src=1, color='white'}) => {
  return (
    <AwesomeButton backgroundDarker='#ec6a9c' onPress={onPress} width={120} height={120} backgroundColor='white' rounded>
        {src!=1 ?<StyledImage resizeMode="contain" source={src} />:<StyledViewColor color={color}/>}
    </AwesomeButton>
  )
}

export default ImageButton