import SearchFormBody from "../../../molecules/SignUp/SearchFormBody"
import SearchFormHeader from "../../../molecules/SignUp/SearchFormHeader"
import * as S from  './style'


const SearchUserForm = () => {
    return (
        <S.Wrapper>
            <SearchFormHeader></SearchFormHeader>
            <SearchFormBody  />
        </S.Wrapper>
    )
}

export default SearchUserForm