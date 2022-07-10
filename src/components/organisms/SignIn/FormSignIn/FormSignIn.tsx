import FormBody from "../../../ molecules/SignIn/FormBody"
import FormHeader from "../../../ molecules/SignIn/FormHeader"
import * as S from  './style'


const FormSignIn = () => {
    return (
        <S.Wrapper>
            <FormHeader></FormHeader>
            <FormBody  />
        </S.Wrapper>
    )
}

export default FormSignIn