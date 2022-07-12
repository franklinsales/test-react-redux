import * as S from "./style"
interface IButtonForm extends React.ComponentPropsWithoutRef<"button">{

    onClick?: () => void
}

const ButtonForm = ({children, onClick, ...props}: IButtonForm) => {
    return (
        <S.Wrapper onClick={onClick} {...props}>{children}</S.Wrapper>
    )
}

export default ButtonForm