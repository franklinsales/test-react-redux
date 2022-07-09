import * as S from './style'

interface ILayoutBoxRounded {

    children: React.ReactNode
}

const LayoutBoxRounded = ({children}: ILayoutBoxRounded) => {
    return (
        <S.LayoutWrapper>
            <S.BoxContentWrapper>
                {children}
            </S.BoxContentWrapper>
        </S.LayoutWrapper>
    )
}

export default LayoutBoxRounded