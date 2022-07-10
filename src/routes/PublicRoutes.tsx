import { Route, BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom";
import SignIn from "../pages/Public/SignIn";
import SingUp from "../pages/Public/SignUp";

const PublicRoutes = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/sing-up" element={<SingUp/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default PublicRoutes;
