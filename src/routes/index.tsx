import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import { useState } from "react";
import { checkCookie } from "../utils/cookies";

const Routes = () => {

    const [logged, setLogged] = useState<boolean>(false)

    useState(() => {
        if (checkCookie() == null) {
            setLogged(true)
        }
    })

    return (logged ? <PublicRoutes></PublicRoutes> : <PrivateRoutes></PrivateRoutes>);
};

export default Routes;