import { useEffect, useState } from "react"

import ButtonForm from "../../../atoms/ButtonForm"
import InputIcon from "../../../atoms/InputIcon"

import User from "../../../../types/User/User"
import { useDispatch, useSelector } from "react-redux"
import { registerUserAction } from "../../../../redux/actions/authenticationActions"

import * as S from "./style"

const SignUpFormBody = () => {

    const [formData, setFormData] = useState<User>({} as User)
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
            console.error("Password and Password Confirmation are not equal")
        }
    }

    useEffect(() => {
        console.debug("register useEffect", register)
    }, [register])

    return (
        <S.Wrapper>
            <form onSubmit={submitFormHandler}>
                <InputIcon name="username" labelText="Username" onChange={usernameChangeHandler}></InputIcon>
                <InputIcon name="password" labelText="Password" onChange={passwordChangeHandler}></InputIcon>
                <InputIcon name="password-confirmation" labelText="Password Confirmation" onChange={passwordConfirmationChangeHandler}></InputIcon>
                <ButtonForm type="submit">Sign Up</ButtonForm>
            </form>
        </S.Wrapper>
    )
}

export default SignUpFormBody