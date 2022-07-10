import * as S from "./style"
interface IInputIcon extends S.IWrapper{
    children?: React.ReactNode
}

const InputIcon = ({children, marginBottom, marginTop}: IInputIcon) => {
    return (
        <S.Wrapper marginBottom={marginBottom} marginTop={marginTop}>
            <S.SpanWrapper>https://</S.SpanWrapper>
            <S.InputWrapper type="text" placeholder="domain.tld" /> 
        </S.Wrapper>
    )
}

export default InputIcon