import FormSignIn from '../../organisms/SignIn/FormSignIn'
import * as S from './style'

const SignInTemplate = () => {
    return (
        <S.ContentWrapped>
            <S.FormWrappe>
                <FormSignIn></FormSignIn>
            </S.FormWrappe>
            <S.HeroWrappe>b</S.HeroWrappe>
        </S.ContentWrapped>
    )
}

export default SignInTemplate