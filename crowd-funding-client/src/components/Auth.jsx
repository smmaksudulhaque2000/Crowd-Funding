import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";


const Auth = () => {
    return (
        <div className="font-poppins">
            <NavBar></NavBar>
            <Outlet />
        </div>
    );
};

export default Auth;
