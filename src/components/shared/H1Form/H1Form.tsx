import * as S from "./style"
interface IH1Form {
    children?: React.ReactNode
}

const H1Form = ({children}: IH1Form) => {
    return (
        <S.Wrapper>{children}</S.Wrapper>
    )
}

export default H1Form