/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const NavLink = ({ navItemConfig }) => {
  const isLink = navItemConfig.isLink;

  return (
    <Link to={navItemConfig?.href || "#"}>
      {navItemConfig.icon}
      {navItemConfig.text && (
        <li className="font-semibold text-slate-200">{navItemConfig.text}</li>
      )}
    </Link>
  );
};

export default NavLink;
