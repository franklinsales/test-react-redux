import FormSignIn from '../../organisms/SignIn/FormSignIn'
import HeroSignIn from '../../organisms/SignIn/HeroSignIn'
import * as S from './style'

const SignInTemplate = () => {
    return (
        <S.ContentWrapped>
            <S.FormWrappe>
                <FormSignIn></FormSignIn>
            </S.FormWrappe>
            <S.HeroWrappe>
                <HeroSignIn/>
            </S.HeroWrappe>
        </S.ContentWrapped>
    )
}

export default SignInTemplate