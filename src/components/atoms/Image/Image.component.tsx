import React, { FC } from 'react'
import { ImageProps } from 'react-native'
import { StyledImage } from './Image.styled'

const Image:FC<ImageProps> = ({source, style}) => {
  return (
      <StyledImage resizeMode='contain' source={source} style={style} />
  )
}

export default Image