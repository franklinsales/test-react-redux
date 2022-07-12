import { useEffect, useState } from "react"

import * as S from  './style'

import H1Form from "../../../atoms/H1Form"
import H1Subtitle from "../../../atoms/H1Subtitle"

import ButtonForm from "../../../atoms/ButtonForm"
import InputIcon from "../../../atoms/InputIcon"

import { useDispatch, useSelector } from "react-redux"
import { searchUserAction } from "../../../../redux/actions/searchUser"
import SearchUser from "../../../../types/SearchUser/SearchUser"

import TableList from "../../../atoms/TableList"

const SearchUserForm = () => {

    const [userSearch, setUserSearch] = useState<SearchUser>({} as SearchUser)
    const dispatch = useDispatch()
    const searchUser = useSelector((state: any) => state.searchUser.response)
    
    useEffect(() => {
        dispatch(searchUserAction(userSearch))
    }, [])

    useEffect(() => {
        console.debug("searchUser", searchUser)
    }, [searchUser])

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
            
            <S.SearchFormHeaderWrapper>
                <H1Form> Procurar Usuários </H1Form>
                <H1Subtitle> Basta informar o nome de usuário. </H1Subtitle>
            </S.SearchFormHeaderWrapper>

            
            <S.SearchFormBodyWrapper>
                <form onSubmit={submitFormHandler}>
                    <InputIcon name="username" labelText="Username" onChange={usernameChangeHandler}></InputIcon>
                    <ButtonForm>Search User</ButtonForm>
                </form>
            </S.SearchFormBodyWrapper>


            <TableList data={searchUser}/>
        </S.Wrapper>
    )
}

export default SearchUserForm