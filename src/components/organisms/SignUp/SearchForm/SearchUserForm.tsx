import SearchFormBody from "../../../molecules/SignUp/SearchFormBody"
import SearchFormHeader from "../../../molecules/SignUp/SearchFormHeader"
import SearchList from "../../../molecules/SignUp/SearchList/SearchList"
import * as S from  './style'


const SearchUserForm = () => {
    return (
        <S.Wrapper>
            <SearchFormHeader></SearchFormHeader>
            <SearchFormBody  />
            <SearchList />
        </S.Wrapper>
    )
}

export default SearchUserForm