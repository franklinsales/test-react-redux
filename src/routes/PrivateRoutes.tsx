import { Route, RouteProps, BrowserRouter, Routes} from "react-router-dom";

import Home from "../pages/private/Home";
import Redirect from "../pages/private/Redirect";

const PrivateRoutes: React.FC<RouteProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Redirect/>} />
                <Route path="/home"  element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default PrivateRoutes
