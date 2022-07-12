import * as S from "./style"
interface IInputIcon extends S.IWrapper, React.ComponentPropsWithoutRef<"input">{
    labelText?: string
}

const InputIcon = ({labelText, marginBottom, marginTop, ...props}: IInputIcon) => {
    return (
        <S.Wrapper marginBottom={marginBottom} marginTop={marginTop}>
            <label> {labelText} </label>
            <S.WrapperInput>
                <S.SpanWrapper>https://</S.SpanWrapper>
                <S.InputWrapper type="text" placeholder="domain.tld" {...props}/> 
            </S.WrapperInput>
        </S.Wrapper>
    )
}

export default InputIcon