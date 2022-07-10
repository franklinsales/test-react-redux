import FormBody from "../../../ molecules/SignUp/FormBody"
import FormHeader from "../../../ molecules/SignUp/FormHeader"
import * as S from  './style'


const FormSignUp = () => {
    return (
        <S.Wrapper>
            <FormHeader></FormHeader>
            <FormBody  />
        </S.Wrapper>
    )
}

export default FormSignUp