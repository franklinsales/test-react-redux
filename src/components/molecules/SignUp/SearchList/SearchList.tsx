import { useEffect, useState } from "react"
import TableList from "../../../atoms/TableList"

import { useSelector } from "react-redux"

const SearchList = () => {
    
    const searchUser = useSelector((state: any) => state.searchUser.response)

    useEffect(() => {
        console.debug("searchUser", searchUser)
    }, [searchUser])

    return (
        <TableList data={searchUser}/>
    )
}

export default SearchList