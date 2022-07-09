interface IH1Form {
    children?: React.ReactNode
}

const H1Form = ({children}: IH1Form) => {
    return (
        <h1>{children}</h1>
    )
}

export default H1Form