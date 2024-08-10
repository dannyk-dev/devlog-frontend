import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getNavConfig } from "../utils/constants";
import NavLink from "./navbar/NavLink";
import { useEffect } from "react";
import Input from "./Input";
import { useUser } from "../hooks/services/user";

const Navbar = () => {
  const { user, isLoading, isError } = useUser();

  const navbarConfig = getNavConfig(user ? true : false);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <nav className="flex justify-between px-20 py-4 items-center bg-slate-800 z-50 top-0 left-0 right-0 shadow-sm shadow-white/15">
      <h1 className="text-3xl text-slate-500 font-bold block mr-5">
        <Link to={"/"}>
          <span className="text-3xl text-amber-600">Dev</span>log
        </Link>
      </h1>
      <div className="flex items-baseline justify-between flex-1">
        <Input type="text" name="search" placeholder="Search..." />

        <ul className="flex items-center space-x-6">
          {navbarConfig.map((item, index) => (
            <NavLink key={index * Math.random() * 1000} navItemConfig={item} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
