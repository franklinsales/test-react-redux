import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

const Routes = () => {
    return (!true ? <PrivateRoutes></PrivateRoutes> : <PublicRoutes></PublicRoutes>);
};

export default Routes;