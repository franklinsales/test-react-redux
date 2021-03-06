import { useEffect, useState } from "react"

import H1Form from "../../../shared/H1Form"
import H1Subtitle from "../../../shared/H1Subtitle"

import ButtonForm from "../../../shared/ButtonForm"
import InputIcon from "../../../shared/InputIcon"

import User from "../../../../types/User/User"
import { useDispatch, useSelector } from "react-redux"
import { loginUserAction } from "../../../../redux/actions/authenticationActions"

import * as S from "./style"
import { Link } from "react-router-dom"


const FormSignIn = () => {

    const [formData, setFormData] = useState<User>({} as User)
    const dispatch = useDispatch()
    const login = useSelector((state: any) => state.login.response)

    const submitFormHandler = (e:any) => {
        e.preventDefault()
        dispatch(loginUserAction(formData))
    }

    const usernameChangeHandler = (e: any) => {
        const username = e.target.value
        setFormData({...formData, username})
    }
    
    const passwordChangeHandler = (e: any) => {
        const password = e.target.value
        setFormData({...formData, password})
    }

    return (
        <S.Wrapper>
            {/* Form Header */}
            <H1Form>
                Acesse o MagicSys
            </H1Form>
            <H1Subtitle> 
                Basta informar o seu e-mail ou senha. Caso você não possua uma conta, basta acessar a página de cadastro 
            </H1Subtitle>


            {/* Form Body */}
            <S.FormBodyWrapper>
                <form onSubmit={submitFormHandler}>

                    <InputIcon
                        icon="fa-solid fa-user"
                        onChange={usernameChangeHandler}
                        labelText="Username:"
                        data-cy="login_input_username"
                        name="username" />

                    <InputIcon 
                        icon="fa-solid fa-key"
                        onChange={passwordChangeHandler}
                        labelText="Password:"
                        type="password"
                        data-cy="login_input_password"
                        name="password"/>

                    <ButtonForm
                        type={"submit"}
                        data-cy="btn_login">
                            Sign In
                    </ButtonForm>

                    {login?.error === "user invalid" && <S.ErrorWrapper>Usuário inválido! Tente novamente.</S.ErrorWrapper>}

                    {login?.user && <S.SuccessWrapper>Login Realizado com Sucesso.</S.SuccessWrapper>}
                </form>
                <br/>
                <div>
                    Deseja criar um usuário? <Link to="/sign-up"> Acesse a página de: Cadastro </Link>
                </div>
            </S.FormBodyWrapper>
        </S.Wrapper>
    )
}

export default FormSignIn