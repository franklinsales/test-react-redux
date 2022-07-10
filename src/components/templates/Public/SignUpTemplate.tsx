import FormSignUp from '../../organisms/SignUp/FormSignUp'
import FormSearchUser from '../../organisms/SignUp/FormSearchUser'
import * as S from './style'

const SignUpTemplate = () => {
    return (
        <S.ContentWrapped>
            <S.FormWrappe>
                <FormSignUp></FormSignUp>
            </S.FormWrappe>
            <S.HeroWrappe>
                <FormSearchUser/>
            </S.HeroWrappe>
        </S.ContentWrapped>
    )
}

export default SignUpTemplate