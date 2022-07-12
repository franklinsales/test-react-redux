import User from "../../../types/User/User"


interface ITableList {
    data: User[]
}

const TableList = ({data}: ITableList) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nome Usuário</th>
                </tr>
            </thead>
            <tbody>
                {data?.map(e => <tr key={e.id}><td>{e.username}</td></tr>)}
            </tbody>
        </table>
    )
}

export default TableList