
import { useEffect, useState } from "react"

import ButtonForm from "../../../shared/ButtonForm"
import InputIcon from "../../../shared/InputIcon"

import User from "../../../../types/User/User"
import { useDispatch, useSelector } from "react-redux"
import { registerUserAction } from "../../../../redux/actions/authenticationActions"

import H1Form from "../../../shared/H1Form"
import H1Subtitle from "../../../shared/H1Subtitle"

import * as S from  './style'
import { Link } from "react-router-dom"

const RegisterForm = () => {

    const [formData, setFormData] = useState<User>({} as User)
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>("")
    const [errorValidation, setErrorValidation] = useState<string>("")

    const dispatch = useDispatch()
    const register = useSelector((state: any) => state.register.response)

    const passwordConfirmationValidation = (value: string) => {
        if(value !== formData.password){
            setErrorValidation("Password and Password Confirmation are not equal")
            return
        }

        setErrorValidation("")
    }

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
        const value = e.target.value
        setPasswordConfirmation(value)
        passwordConfirmationValidation(value)
    }

    useEffect(() => {
        passwordConfirmationValidation("")
    }, [])

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
                        labelText="Username:"
                        onChange={usernameChangeHandler}/>

                    <InputIcon 
                        type="password"
                        icon="fa-solid fa-key"
                        name="password"
                        labelText="Password:"
                        onChange={passwordChangeHandler}/>

                    <InputIcon
                        type="password"
                        icon="fa-solid fa-key"
                        name="password-confirmation"
                        labelText="Password Confirmation:"
                        onChange={passwordConfirmationChangeHandler}/>

                    <ButtonForm type="submit" disabled={errorValidation ? true : false}>Sign Up</ButtonForm>

                    <br/><br/>
                    <div>
                        Já possuí conta? <Link to="/"> Acesse a página de Login </Link>
                    </div>
                    

                    {register?.error === null && <S.SuccessWrapper> Cadastro Realizado com Sucesso! </S.SuccessWrapper>}
                    {register?.error && <S.ErrorWrapper> Erro ao tentar cadastrar </S.ErrorWrapper>}
                    {errorValidation && formData.password && <S.ErrorWrapper> {errorValidation} </S.ErrorWrapper>}
                </form>
            </S.FormBodyWrapper>
        </S.Wrapper>
    )
}

export default RegisterForm