import React, { useState } from "react";
import Button from "../Button";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, clearUser } from "../../store/userSlice";
import authServices from "../../services/userServices";
import { Menu, X } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector(selectUser);
  const authStatus = user != null;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      toPage: "/home",
      active: authStatus,
    },
    {
      name: "Profile",
      toPage: "/profile",
      active: authStatus,
    },
    {
      name: "Learn",
      toPage: "/",
      active: !authStatus,
    },
    {
      name: "About Us",
      toPage: "/about-us",
      active: !authStatus,
    },
    {
      name: "Contact Us",
      toPage: "/contact",
      active: authStatus,
    },
    {
      name: "Add Project",
      toPage: "/add-project",
      active: authStatus,
    },
  ];

  const logoutHandler = () => {
    authServices.logoutUser();
    dispatch(clearUser());
    navigate("/login");
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="relative w-full bg-white shadow-md py-2">
      <div className="mx-10 flex  items-center justify-between px-2 py-2 ">
        <div className="inline-flex items-center space-x-2">
          <span className=" font-bold text-2xl">.DOT</span>
        </div>
        <div className=" hidden md:block grow items-start lg:flex">
          <ul className="ml-12 inline-flex space-x-8">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <NavLink
                    to={item.toPage}
                    className="text-lg font-semibold text-gray-800 hover:text-gray-900 hover:border-b-2 border-green-600"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ) : null
            )}
          </ul>
        </div>
        <div className="hidden md:block mx-4">
          {authStatus ? (
            <Link to="/login">
              <Button
                title="Logout"
                className="text-black border-2"
                onClick={logoutHandler}
              />
            </Link>
          ) : (
            <>
              <Link to="/signup">
                <Button title="Join Us" className="bg-green-500 text-white" />
              </Link>
              <Link to="/login">
                <Button title="Sign In" className="text-black border-2" />
              </Link>
            </>
          )}
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span className="font-bold">.DOT</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {navItems.map((item) =>
                      item.active ? (
                        <NavLink
                          key={item.name}
                          href={item.toPage}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </NavLink>
                      ) : null
                    )}
                  </nav>
                </div>
                {authStatus ? (
                  <Link to="/login">
                    <Button
                      title="Logout"
                      className="mt-4 w-full rounded-md  px-3 py-2 text-sm font-semibold shadow-sm hover:bg-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black text-black border-2"
                      onClick={logoutHandler}
                    />
                  </Link>
                ) : (
                  <>
                    <Link to="/signup">
                      <Button
                        title="Join Us"
                        className="bg-green-500  mt-4 w-full rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                      />
                    </Link>
                    <Link to="/login">
                      <Button
                        title="Sign In"
                        className=" mt-4 w-full rounded-md  px-3 py-2 text-sm font-semibold shadow-sm hover:bg-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black text-black border-2"
                      />
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
