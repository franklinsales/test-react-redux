import * as S from "./style"
interface IButtonForm {

    onClick: () => void

    children?: React.ReactNode
}

const ButtonForm = ({children, onClick}: IButtonForm) => {
    return (
        <S.Wrapper onClick={onClick}>{children}</S.Wrapper>
    )
}

export default ButtonForm