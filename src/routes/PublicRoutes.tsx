import { Route, BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom";
import SignIn from "../pages/public/SignIn";
import SingUp from "../pages/public/SignUp";

const PublicRoutes = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/sign-up" element={<SingUp/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default PublicRoutes;
