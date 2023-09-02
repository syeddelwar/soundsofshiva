import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CommonBtn from "../pages/components/Common-btn/CommonBtn";
import logo from "../assets/img/logo.png";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0  bg-black">
        <nav className="relative px-4 py-4 max-w-7xl mx-auto flex justify-between  items-center">
          <Link to="/" className="text-3xl font-bold leading-none">
            {/* <img src={logo} alt="" /> */}
            <h4 className="text-white">soundsofshiva.com</h4>
          </Link>

          <ul className="hidden  lg:flex  lg:items-center lg:space-x-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-secondary font-semibold text-[17px] text-white hover:text-secondary "
                    : "font-semibold text-[17px] text-white hover:text-secondary"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              

				<a href="#about" className="font-semibold text-[17px] text-white hover:text-secondary">About </a>
          
            </li>

            <li>
            

				 <a href="#speakers" className="font-semibold text-[17px] text-white hover:text-secondary"> Speakers</a>
               
             
            </li>

            <li>
           
              <a  href="#schedule" className="font-semibold text-[17px] text-white hover:text-secondary">
                Schedule
              </a>
            </li>

            <li>
           
              <a
                href="#blog"
                className=" border-secondary font-semibold text-[17px] text-white hover:text-secondary
			 "
              >
                Blog
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="font-bold text-[17px] text-white hover:text-secondary"
              >
                Contact
              </a>
            </li>

            <div className="hidden lg:inline-block">
              <CommonBtn></CommonBtn>
            </div>
          </ul>

          <div className="lg:hidden ">
            <div className="">
              <button
                onClick={() => setIsMenuOpen(true)}
                htmlFor="my-drawer"
                className="drawer-button flex items-end text-secondary text-3xl text-black-600 p-3"
              >
                <AiOutlineMenuUnfold></AiOutlineMenuUnfold>
              </button>
            </div>
          </div>
        </nav>

        {/* // for mobile */}

        {isMenuOpen && (
          <div className=" navbar-menu relative z-50 lg:hidden">
            <div className=" fixed inset-0 bg-gray-800 "></div>
            <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-primary border-r overflow-y-auto">
              <div className="flex items-center mb-8">
                <a className="mr-auto text-3xl font-bold leading-none" href="#">
                  <h1 className="text-white">logo</h1>
                </a>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="navbar-close"
                >
                  <svg
                    className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <div>
                <ul className="space-y-3 text-center">
                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive
                          ? "border-b-2 border-secondary font-semibold text-[17px] text-white hover:text-secondary "
                          : "font-semibold text-[17px] text-white hover:text-secondary"
                      }
                    >
                      About Us
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        isActive
                          ? "border-b-2 border-secondary font-semibold text-[17px] text-white hover:text-secondary "
                          : "font-semibold text-[17px] text-white hover:text-secondary"
                      }
                    >
                      Services
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/books"
                      className={({ isActive }) =>
                        isActive
                          ? "border-b-2 border-secondary font-semibold text-[17px] text-white hover:text-secondary "
                          : "font-semibold text-[17px] text-white hover:text-secondary"
                      }
                    >
                      Books
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        isActive
                          ? "border-b-2 border-secondary "
                          : "font-bold text-[17px] text-white hover:text-secondary"
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="mt-auto"></div>
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
