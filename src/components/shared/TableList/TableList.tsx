import User from "../../../types/User/User"

import * as S from "./style"

interface ITableList {
    data: User[]
}

const TableList = ({data}: ITableList) => {
    return (
        <S.TableWrapper>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {data?.map(e => <tr key={e.id}><td>{e.id}</td><td>{e.username}</td> <td> {e.password} </td></tr>)}
            </tbody>

            {(data?.length === 0 || !data) && <span>Sem usuários cadastrados no momento</span>}
        </S.TableWrapper>
    )
}

export default TableList