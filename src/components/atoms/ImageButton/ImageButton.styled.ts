import styled from "styled-components/native";

interface StyledViewColorProps{
    color:string
}

export const StyledImage = styled.Image`
    height:80px;
    width:80px;
`

export const StyledViewColor = styled.View<StyledViewColorProps>`
    border-radius:200px;
    height:50%;
    width:50%;
    background-color:${({color})=>color};
`