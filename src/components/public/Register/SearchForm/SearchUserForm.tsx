import SearchFormBody from "../../../molecules/SignUp/SearchFormBody"
import SearchList from "../../../molecules/SignUp/SearchList/SearchList"
import * as S from  './style'

import H1Form from "../../../atoms/H1Form"
import H1Subtitle from "../../../atoms/H1Subtitle"


const SearchUserForm = () => {
    return (
        <S.Wrapper>
            
            <S.SearchFormHeaderWrapper>
                <H1Form> Procurar Usuários </H1Form>
                <H1Subtitle> Basta informar o nome de usuário. </H1Subtitle>
            </S.SearchFormHeaderWrapper>

            <SearchFormBody  />
            <SearchList />
        </S.Wrapper>
    )
}

export default SearchUserForm