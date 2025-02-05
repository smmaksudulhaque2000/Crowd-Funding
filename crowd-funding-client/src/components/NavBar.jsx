import { Link, NavLink } from "react-router-dom";
import { FaDonate, FaHome, FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaUserPen } from "react-icons/fa6";
import ThemeToggleButton from "./ThemeToggleButton";
import { MdNoteAdd } from "react-icons/md";
import { TiThSmall } from "react-icons/ti";
import { LuBookUser } from "react-icons/lu";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <li className="text-gray-700 font-bold">
        <NavLink to={"/"}>
          <FaHome />
          Home
        </NavLink>
      </li>
      <li className="text-gray-700 font-bold">
        <NavLink to={"/allcamping"}>
          <TiThSmall />
          All Campaign
        </NavLink>
      </li>
      <li className="text-gray-700 font-bold">
        <NavLink to={"/addcampaign"}>
          <MdNoteAdd />
          Add New Campaign
        </NavLink>
      </li>
      <li className="text-gray-700 font-bold">
        <NavLink to={"/mycampaign"}>
          <FaUserPen />
          My Campaign
        </NavLink>
      </li>
      <li className="text-gray-700 font-bold">
        <NavLink to={"/mydonations"}>
          <LuBookUser />
          My Donations
        </NavLink>
      </li>
      <li>
        <ThemeToggleButton />
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 lg:px-10 justify-between">
      <div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <Link to={"/"} className="text-xl lg:text-2xl font-bold flex gap-2 justify-center items-center">
          <FaDonate className="text-3xl"/>
          Crowd Funding
        </Link>
      </div>

      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="gap-5 pr-4">
        {user && user.email ? (
          <Link to="/dashboard" className="tooltip tooltip-bottom" data-tip={user.displayName}>
            <img
              referrerPolicy="no-referrer"
              className="w-10 h-10 bg-slate-500 rounded-full"
              src={user?.photoURL}
              alt="User Photo"
            />
          </Link>
        ) : (
          <Link to="/dashboard">
            <FaUserCircle className="w-10 h-10" />
          </Link>
        )}

        {user && user.email ? (
          <button
            onClick={logOut}
            className="bg-gray-700 text-white p-2 rounded"
          >
            Log Out
          </button>
        ) : (
          <div className="flex flex-col gap-2">
            <Link className="bg-gray-700 text-white p-1 lg:p-2 text-center rounded" to="/auth/login">
              Login
            </Link>
            <Link className="bg-gray-700 text-white p-1 lg:p-2 text-center rounded" to="/auth/register">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
