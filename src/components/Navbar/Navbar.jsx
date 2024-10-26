import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart, FaCaretDown } from "react-icons/fa";
import { Menu, DropDownLinks } from "../../DummyData/Dummydata";

const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-grey-900 dark:text-white duration-200 relative z-40">
        {/* upper Navbar  */}
        <div className="bg-primary/40 py-2">
          <div className="container flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-3">
                <img src={Logo} alt="Logo" className="w-10" />
                Electronic
              </a>
            </div>
            {/* Search bar */}
            {/* <div>
              <div className="relative group hidden sm:block">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[300px] sm:w-[300px]  text-black transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
                />
                <IoMdSearch className="text-grey-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
              </div>
            </div> */}

            <form class="max-w-md mx-auto">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  required
                />
                <button
                  type="submit"
                  class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>

            {/* order button  */}
            <button
              onClick={() => alert("Ordering not available yet")}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Darkmode Button  */}
            <div></div>
          </div>
        </div>

        {/* Lower Navbar */}
        <div
          className="flex justify-center"
          data-aos="zoom-out"
          data-aos-duration="6000"
        >
          <ul className="sm:flex hidden items-center gap-4">
            {Menu.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="inline-block px-4 hover:text-primary duration-200"
                >
                  {data.name}
                </a>
              </li>
            ))}
            {/* Simple Dropdown and links  */}
            <li className="group relative cursor-pointer">
              <a href="#" className="flex item-center gap-[2px] py-2">
                Treanding Products
                <span>
                  <FaCaretDown className="transition-all duration-200 mt-1 group-hover:rotate-180 " />
                  <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white me-5 p-2 text-black shadow-md">
                    <ul>
                      {DropDownLinks.map((data) => (
                        <li key={data.id}>
                          <a
                            href={data.link}
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
