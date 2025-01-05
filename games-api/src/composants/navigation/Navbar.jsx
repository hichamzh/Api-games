import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";

export const Navbar = () => {
  const [isDrop, setIsDrop] = useState(false);

  const ToggleDrop = () => {
    setIsDrop((prev) => !prev);
  };
  return (
    <>
      <div className="navbar bg-primary text-primary-content">
        <div className="flex-none sm:hidden">
          <div className="dropdown">
            <button className="btn btn-ghost btn-circle" onClick={ToggleDrop}>
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </button>
            <ul
              className={`menu menu-sm dropdown-content bg-primary rounded-box z-[1] mt-3 p-2 shadow ${
                isDrop ? "block" : "hidden"
              }`}
            >
              <li>
                <Link to={"/giveaways"}>Giveaways</Link>
              </li>
              <li>
                <Link to={"/allgames"}>Jeux</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-1">
          <Link className="btn btn-ghost text-xl" to={"/"}>
            Games ZH
          </Link>
        </div>
        <div className="hidden sm:block flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/giveaways"}>Giveaways MMO</Link>
            </li>
            <li>
              <Link to={"/allgames"}>Tous les jeux</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
