import SignUpFormBody from "../../../molecules/SignUp/SignUpFormBody"
import SignUpFormHeader from "../../../molecules/SignUp/SignUpFormHeader"
import * as S from  './style'


const FormSignUp = () => {
    return (
        <S.Wrapper>
            <SignUpFormHeader></SignUpFormHeader>
            <SignUpFormBody  />
        </S.Wrapper>
    )
}

export default FormSignUp