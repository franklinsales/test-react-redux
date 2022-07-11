
import { useEffect, useState } from "react"
import ButtonForm from "../../../atoms/ButtonForm"
import InputIcon from "../../../atoms/InputIcon"

import User from "../../../../types/User/User"
import { useDispatch, useSelector } from "react-redux"
import { loginUserAction } from "../../../../actions/authenticationActions"

import * as S from "./style"
import { Link } from "react-router-dom"


const FormBody = () => {

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
        </S.Wrapper>
    )
}

export default FormBody