import ButtonForm from "../../../atoms/ButtonForm"
import InputIcon from "../../../atoms/InputIcon"
import * as S from "./style"

const FormBody = () => {

    const submitOnClick = () =>{
        console.debug("CLICOU")
    }

    const submitFormHandler = (e:any) => {
        e.preventDefault()
        console.debug(e)
    }

    return (
        <S.Wrapper>
            <form onSubmit={(e) => {submitFormHandler(e)}}>
                <InputIcon name="username"></InputIcon>
                <InputIcon name="username"></InputIcon>
                <ButtonForm type={"submit"}>Sign In</ButtonForm>
            </form>
        </S.Wrapper>
    )
}

export default FormBody