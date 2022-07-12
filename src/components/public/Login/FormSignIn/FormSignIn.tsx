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

    useEffect(() => {
        console.debug("login", login)
    }, [login])

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
                {login && console.debug("login template", login)}
                <form onSubmit={submitFormHandler}>
                    <InputIcon name="username" labelText="Username:" onChange={usernameChangeHandler}></InputIcon>
                    <InputIcon name="password" labelText="Password:" onChange={passwordChangeHandler}></InputIcon>
                    <ButtonForm type={"submit"}>Sign In</ButtonForm>
                    {login?.error === "user invalid" && <S.ErrorWrapper>Usuário inválido! Tente novamente.</S.ErrorWrapper>}
                </form>
                <br/>
                <div>
                    Deseja criar um usuário? Acesse a página de  
                    <Link to="/sign-up">
                            Cadastro
                    </Link>
                </div>
            </S.FormBodyWrapper>
        </S.Wrapper>
    )
}

export default FormSignIn