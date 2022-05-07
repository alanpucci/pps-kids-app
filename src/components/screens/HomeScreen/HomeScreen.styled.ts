import { Dimensions, ImageBackgroundProps } from 'react-native';
import styled from 'styled-components/native';

export const StyledImageBackground = styled.ImageBackground<ImageBackgroundProps>`
    padding-top:40px;
    justify-content:space-around;
    width:100%;
    height:${Dimensions.get('window').height}px;
`

export const StyledRow = styled.View`
    flex-direction:row;
    justify-content:space-evenly;
`

export const StyledImageContainer = styled.View`
    height:120px;
    width:120px;
`