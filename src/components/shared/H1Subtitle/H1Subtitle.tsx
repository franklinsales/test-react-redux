import * as S from "./style"
interface IH1SubtitleForm {
    children?: React.ReactNode
}

const H1Subtitle = ({children}: IH1SubtitleForm) => {
    return (
        <S.Wrapper>{children}</S.Wrapper>
    )
}

export default H1Subtitle