
import { useEffect, useState } from "react"

import ButtonForm from "../../../shared/ButtonForm"
import InputIcon from "../../../shared/InputIcon"

import User from "../../../../types/User/User"
import { useDispatch, useSelector } from "react-redux"
import { registerUserAction } from "../../../../redux/actions/authenticationActions"

import H1Form from "../../../shared/H1Form"
import H1Subtitle from "../../../shared/H1Subtitle"

import * as S from  './style'

const RegisterForm = () => {

    const [formData, setFormData] = useState<User>({} as User)
    const [errorValidation, setErrorValidation] = useState<string>("")

    const dispatch = useDispatch()
    const register = useSelector((state: any) => state.register.response)

    const submitFormHandler = (e:any) => {
        e.preventDefault()
        dispatch(registerUserAction(formData))
    }

    const usernameChangeHandler = (e: any) => {
        const username = e.target.value
        setFormData({...formData, username})
    }
    
    const passwordChangeHandler = (e: any) => {
        const password = e.target.value
        setFormData({...formData, password})
    }

    const passwordConfirmationChangeHandler = (e: any) => {
        const passwordConfirmation = e.target.value
        if(passwordConfirmation !== formData.password){
            setErrorValidation("Password and Password Confirmation are not equal")
            return
        }

        setErrorValidation("")
    }

    useEffect(() => {
        console.debug("register useEffect", register)
    }, [register])

    return (
        <S.Wrapper>
            
            <H1Form> Cadastre-se no MagicSys </H1Form>
            <H1Subtitle> Basta informar o seu e-mail, senha e confirmar a senha para se cadastrar. </H1Subtitle>


            <S.FormBodyWrapper>
                <form onSubmit={submitFormHandler}>
                    <InputIcon 
                        icon="fa-solid fa-user"
                        name="username"
                        labelText="Username"
                        onChange={usernameChangeHandler}/>

                    <InputIcon 
                        icon="fa-solid fa-key"
                        name="password"
                        labelText="Password"
                        onChange={passwordChangeHandler}/>

                    <InputIcon 
                        icon="fa-solid fa-key"
                        name="password-confirmation"
                        labelText="Password Confirmation"
                        onChange={passwordConfirmationChangeHandler}/>
                        
                    <ButtonForm type="submit" disabled={errorValidation ? true : false}>Sign Up</ButtonForm>
                    

                    {register?.error === null && <S.SuccessWrapper> Cadastro Realizado com Sucesso! </S.SuccessWrapper>}
                    {register?.error && <S.ErrorWrapper> Erro ao tentar cadastrar </S.ErrorWrapper>}
                    {errorValidation && <S.ErrorWrapper> {errorValidation} </S.ErrorWrapper>}
                </form>
            </S.FormBodyWrapper>
        </S.Wrapper>
    )
}

export default RegisterForm