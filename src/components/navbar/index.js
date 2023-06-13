import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div class="max-w-screen flex items-center justify-between p-4">
        <Link to={"/"}>
          <img
            src="https://res.cloudinary.com/dwdrlrzkt/image/upload/f_auto,q_auto/Image_13-06-23_at_12.39_AM_wgynyt.jpg"
            class="h-10 mr-3"
            alt="SkillStreak Logo"
          />
        </Link>
        <div className="flex flex-row items-center justify-center">
          <Link to={"/create"}>
            <p className="px-2 py-1 border rounded-md ml-2 cursor-pointer">
              + Create new challenge
            </p>
          </Link>
          <Link to={"/login"}>
            <p className="px-2 py-1 border rounded-md ml-2 cursor-pointer">
              Login
            </p>
          </Link>
          <Link to={"/signup"}>
            <p className="px-2 py-1 border rounded-md ml-2 cursor-pointer">
              Sign Up
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
