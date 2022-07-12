import ButtonForm from "../../../atoms/ButtonForm"
import InputIcon from "../../../atoms/InputIcon"
import * as S from "./style"

import { useDispatch, useSelector } from "react-redux"
import { searchUserAction } from "../../../../redux/actions/searchUser"
import SearchUser from "../../../../types/SearchUser/SearchUser"
import { useEffect, useState } from "react"

const SearchFormBody = () => {

    const [userSearch, setUserSearch] = useState<SearchUser>({} as SearchUser)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(searchUserAction(userSearch))
    }, [])

    const submitFormHandler = (e:any) => {
        e.preventDefault()
        dispatch(searchUserAction(userSearch))
    }

    const usernameChangeHandler = (e: any) => {
        const username = e.target.value
        setUserSearch({...userSearch, username})
    }

    return (
        <S.Wrapper>
            <form onSubmit={submitFormHandler}>
                <InputIcon name="username" labelText="Username" onChange={usernameChangeHandler}></InputIcon>
                <ButtonForm>Search User</ButtonForm>
            </form>
        </S.Wrapper>
    )
}

export default SearchFormBody