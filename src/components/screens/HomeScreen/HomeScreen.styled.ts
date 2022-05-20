import { Dimensions, ImageBackgroundProps } from 'react-native';
import styled from 'styled-components/native';
import ImageButton from '../../atoms/ImageButton/ImageButton.component';

export const StyledImageBackground = styled.ImageBackground<ImageBackgroundProps>`
    justify-content:space-around;
    width:100%;
    height:100%;
`

export const StyledRow = styled.View`
    flex-direction:row;
    margin-top:20px;
    flex-wrap:wrap;
    justify-content:space-evenly;
`

export const StyledImageButton = styled(ImageButton)`
    margin:20px;
`

export const StyledImageContainer = styled.View`
    height:120px;
    width:120px;
`