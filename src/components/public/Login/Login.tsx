import FormSignIn from './FormSignIn'
import HeroSignIn from './HeroSignIn'
import * as S from './style'


const Login = () => {
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

export default Login