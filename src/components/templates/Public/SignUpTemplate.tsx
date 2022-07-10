import FormSignUp from '../../organisms/SignUp/FormSignUp'
import SearchUserForm from '../../organisms/SignUp/SearchForm'
import * as S from './style'

const SignUpTemplate = () => {
    return (
        <S.ContentWrapped>
            <S.FormWrappe>
                <FormSignUp></FormSignUp>
            </S.FormWrappe>
            <S.HeroWrappe>
                <SearchUserForm />
            </S.HeroWrappe>
        </S.ContentWrapped>
    )
}

export default SignUpTemplate