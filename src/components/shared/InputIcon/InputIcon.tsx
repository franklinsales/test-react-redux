import * as S from "./style"
interface IInputIcon extends S.IWrapper, React.ComponentPropsWithoutRef<"input">{
    labelText?: string
    icon?: string
}

const InputIcon = ({labelText, icon, marginBottom, marginTop, ...props}: IInputIcon) => {
    return (
        <S.Wrapper marginBottom={marginBottom} marginTop={marginTop}>
            <label> {labelText} </label>
            <S.WrapperInput>
                <S.SpanWrapper><i className={icon}></i></S.SpanWrapper>
                <S.InputWrapper type="text" {...props}/> 
            </S.WrapperInput>
        </S.Wrapper>
    )
}

export default InputIcon