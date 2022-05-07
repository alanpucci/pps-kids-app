import { TextInput } from "react-native-paper"
import styled from "styled-components/native"
import { TextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput';

export const StyledInput = styled(TextInput)<TextInputProps>`
    height:40px;
    width:100%;
    background-color:white;
    padding:10px;
`
