import styled from "styled-components/native";

interface ButtonProps{
    size: 'full' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
}

const StyledButton = styled.TouchableOpacity<ButtonProps>`
    height:35px;
    width:${({size}) => {
    switch (size) {
        case 'full':return 100
        case 'xl': return 80
        case 'lg': return 60
        case 'md': return 50
        case 'sm': return 30
        case 'xs': return 15
        default:return 100
    }}}%;
    border-radius:10px;
    align-items:center;
    justify-content:center;
    margin:5px auto;
`

const StyledText = styled.Text`
    font-size:20px;
`

export const StyledButtonPrimary = styled(StyledButton)`
    background-color: #ec6a9c;
    border-width:1px;
    border-color:rgb(255,255,255);
`
export const StyledTextPrimary = styled(StyledText)`
    color:white;
`

export const StyledButtonSecondary = styled(StyledButton)`
    background-color:white;
    border-width:2px;
    border-color:#ec6a9c;
`

export const StyledTextSecondary = styled(StyledText)`
    color: #ec6a9c;
`

export const StyledButtonTertiary = styled(StyledButton)`
`

export const StyledTextTertiary = styled(StyledText)`
    color: white;
    text-decoration-line:underline;
    text-decoration-color:white;
`