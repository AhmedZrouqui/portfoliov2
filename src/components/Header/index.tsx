import React from "react";
import { Link, useLocation } from "react-router-dom";
import { navigation } from "../../helpers";

function Header() {
  const path = useLocation().pathname.substring(1);
  const isActive = "bg-lighter font-medium rounded";

  return (
    <div className="flex justify-between">
      <div id="logo">
        <Link to={`/`} className="font-magilio text-5xl">
          Az.
        </Link>
      </div>
      <div id="nav" className="font-poppins">
        <nav className="flex gap-1">
          {navigation.map((item) => (
            <Link
              to={item.path}
              key={item.slug}
              className={`text-sm p-2 duration-300 hover:bg-lighter ease-in ${
                path === item.slug && isActive
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Header;
