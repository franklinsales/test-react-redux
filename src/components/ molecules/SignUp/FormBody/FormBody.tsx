import ButtonForm from "../../../atoms/ButtonForm"
import InputIcon from "../../../atoms/InputIcon"
import * as S from "./style"

const FormBody = () => {

    const submitOnClick = () =>{
        console.debug("CLICOU")
    }

    return (
        <S.Wrapper>
            <InputIcon></InputIcon>
            <InputIcon></InputIcon>
            <InputIcon></InputIcon>
            <ButtonForm onClick={submitOnClick}>Sign In</ButtonForm>
        </S.Wrapper>
    )
}

export default FormBody