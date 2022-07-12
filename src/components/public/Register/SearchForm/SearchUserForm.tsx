import { useEffect, useState } from "react"

import * as S from  './style'

import H1Form from "../../../shared/H1Form"
import H1Subtitle from "../../../shared/H1Subtitle"

import ButtonForm from "../../../shared/ButtonForm"
import InputIcon from "../../../shared/InputIcon"

import { useDispatch, useSelector } from "react-redux"
import { searchUserAction } from "../../../../redux/actions/searchUser"
import SearchUser from "../../../../types/SearchUser/SearchUser"

import TableList from "../../../shared/TableList"

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
                    <InputIcon
                        icon="fa-solid fa-magnifying-glass"
                        name="search"
                        labelText="Search:"
                        onChange={usernameChangeHandler}/>
                    <ButtonForm>Search User</ButtonForm>
                </form>
            </S.SearchFormBodyWrapper>


            <TableList data={searchUser}/>
        </S.Wrapper>
    )
}

export default SearchUserForm