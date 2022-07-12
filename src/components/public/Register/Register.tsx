import FormSignUp from './FormSignUp'
import SearchUserForm from './SearchForm'
import * as S from './style'

const Register = () => {
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

export default Register