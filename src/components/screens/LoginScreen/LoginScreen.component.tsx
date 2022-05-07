import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { LoginStackParamList } from '../../../navigation/stacks/LoginStack';
import { Screens } from "../../../navigation/Screens";
import { fetchInitialState, handleLogin, handleRegister } from "../../../redux/authReducer";
import Logo from "../../atoms/Logo/Logo.component";
import LoginController from '../../organisms/LoginController/LoginController.component';
import { StyledView } from "./LoginScreen.styled";
import BackgroundVideo from "../../molecules/BackgroundVideo/BackgroundVideo.component";
import AwesomeButton from "../../atoms/AwesomeButton/Button.component";
import Spinner from "../../atoms/Spinner/Spinner.component";
import { View } from "react-native";
import RegisterController from "../../organisms/RegisterController/RegisterController.component";
import { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { FloatingAction } from "react-native-floating-action";

type LoginScreenProps = NativeStackScreenProps<LoginStackParamList, Screens.LOGIN>;

export type FormData={
    email:string;
    password:string;
    passwordRepeat?:string;
}

const LoginScreen:FC<LoginScreenProps> = ({navigation}) => {
    const {control, handleSubmit, formState:{errors}, reset, setValue} = useForm<FormData>();
    const dispatch = useDispatch();
    const data:any = useSelector<any>(store => store.auth);
    const [modal, setModal] = useState({signIn:false, signUp:false});

    const handleSignIn = (data:FormData) => {
        dispatch(handleLogin(data));
    }
    
    useEffect(() => {
        if(!!errors.email || !!errors.password || !!errors.passwordRepeat){
            showMessage({type:"danger", message:"Error", description:"Todos los campos son requeridos"});
        }
    },[errors.email, errors.password, errors.passwordRepeat])

    const handleSignUp = (data:FormData) => {
        if(data.password!==data.passwordRepeat){
            showMessage({type:"danger", message:"Errpr", description:"Las contraseñas no coinciden"});
            return;
        }
        dispatch(handleRegister(data));
    }

    const handleModal = (name) => {
        reset();
        dispatch(fetchInitialState());
        setModal({...modal, [name]:!modal[name]});
    }

    const handleFastSignIn = (data:FormData) => {
        setValue("email", data.email);
        setValue("password", data.password);
    }

	return (
		<StyledView>
            {data.loading && <Spinner />}
            <FlashMessage position="top" />
            <BackgroundVideo />
            <Logo />
            <LoginController isVisible={modal.signIn} fastSignIn={handleFastSignIn} handleSubmit={handleSubmit(handleSignIn)} openRegister={()=>handleModal('signUp')} control={control} />
            <RegisterController isVisible={modal.signUp} handleSubmit={handleSubmit(handleSignUp)} closeModal={()=>handleModal('signUp')} control={control} />
        </StyledView>
	);
};

export default LoginScreen;
