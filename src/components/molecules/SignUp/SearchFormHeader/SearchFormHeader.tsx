import H1Form from "../../../atoms/H1Form"
import H1Subtitle from "../../../atoms/H1Subtitle"
import * as S from "./style"

export const SignUpFormHeader = () => {
    return (
        <S.Wrapper>
            <H1Form> Procurar Usuários </H1Form>
            <H1Subtitle> Basta informar o nome de usuário. </H1Subtitle>
        </S.Wrapper>
    )
}

export default SignUpFormHeader