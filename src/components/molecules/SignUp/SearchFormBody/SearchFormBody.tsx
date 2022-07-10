import ButtonForm from "../../../atoms/ButtonForm"
import InputIcon from "../../../atoms/InputIcon"
import * as S from "./style"

const SearchFormBody = () => {

    const submitOnClick = () =>{
        console.debug("CLICOU")
    }

    return (
        <S.Wrapper>
            <InputIcon></InputIcon>
            <ButtonForm onClick={submitOnClick}>Sign In</ButtonForm>
        </S.Wrapper>
    )
}

export default SearchFormBody