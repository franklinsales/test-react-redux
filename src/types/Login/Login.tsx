import User from "../User/User"

interface Login {
    error?: string | null
    user?: User
}

export default Login