import React from "react";
import logoImg from "../assets/img/setting 1.png";

// icons
import { TbSquareKey } from "react-icons/tb";
import { FaSquareOdnoklassniki } from "react-icons/fa6";
import { LuUserSquare2 } from "react-icons/lu";
import { IoWalletOutline } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa6";

const Sidebar = () => {
  return (

      <div className="p-3 pr-4  mt-2 justify-center items-center w-full ">
        <div className="logoBox w-full flex items-center gap-1">
          <img src={logoImg} className="w-7 h-7" alt="logo" />
          <h1 className="logoText hidden  lg:flex text-2xl font-[500] ">
            Dashboard<span className="text-[9px]">v.01</span>
          </h1>
        </div>

        {/* sidebar links */}
        <div className="flex mt-0 items-center p- w-full">
          <ul className="sidebarLinks w-full">
            <li className="sidebarLink flex items-center justify-between mt-2  gap-4 px-1 lg:px-2 py-2 rounded-[10px]  duration-500 ease-in-out hover:bg-[#5932EA]  text-[#9197B3]  hover:text-[#ffffff]   ">
              <div className="flex items-center gap-4">
                <TbSquareKey className="w-[20px] h-[20px] " />
                <p
                  href="#"
                  className="sidebarLinkText hidden  lg:flex  text-[19px] hover:text-gray-50 "
                >
                  Dashboard
                </p>

              </div>
            </li>

            <li className="sidebarLink flex items-center justify-between mt-2  gap-4 px-1 lg:px-2 py-2 rounded-[10px]  duration-500 ease-in-out hover:bg-[#5932EA]  text-[#9197B3]  hover:text-[#ffffff]   ">
              <div className="flex items-center gap-4">
                <FaSquareOdnoklassniki className="w-[20px] h-[20px] " />
                <p
                  href="#"
                  className="sidebarLinkText hidden  lg:flex  text-[19px] hover:text-gray-50 "
                >
                  Products
                </p>
              </div>
              <div className="div hidden lg:flex">
              <FaChevronRight className="w-[10px] h-[10px] " />
              
              </div>
            </li>

            <li className="sidebarLink flex items-center justify-between mt-2  gap-4 px-1 lg:px-2 py-2 rounded-[10px]  duration-500 ease-in-out hover:bg-[#5932EA]  text-[#9197B3]  hover:text-[#ffffff]   ">
              <div className="flex items-center gap-4">
                <LuUserSquare2  className="w-[20px] h-[20px] " />
                <p
                  href="#"
                  className="sidebarLinkText hidden lg:flex  text-[19px] hover:text-gray-50 "
                >
                  Customers
                </p>
              </div>
              <div className="div hidden lg:flex">
              <FaChevronRight className="w-[10px] h-[10px] " />
              
              </div>
            </li>

            <li className="sidebarLink flex items-center justify-between mt-2  gap-4 px-1 lg:px-2 py-2 rounded-[10px]  duration-500 ease-in-out hover:bg-[#5932EA]  text-[#9197B3]  hover:text-[#ffffff]   ">
              <div className="flex items-center gap-4">
                <IoWalletOutline className="w-[20px] h-[20px] " />
                <p
                  href="#"
                  className="sidebarLinkText hidden lg:flex  text-[19px] hover:text-gray-50 "
                >
                  Income
                </p>
              </div>
              <div className="div hidden lg:flex">
              <FaChevronRight className="w-[10px] h-[10px] " />
              
              </div>
            </li>

            <li className="sidebarLink flex items-center justify-between mt-2  gap-4 px-1 lg:px-2 py-2 rounded-[10px]  duration-500 ease-in-out hover:bg-[#5932EA]  text-[#9197B3]  hover:text-[#ffffff]   ">
              <div className="flex items-center gap-4">
                <CiDiscount1  className="w-[20px] h-[20px] " />
                <p
                  href="#"
                  className="sidebarLinkText hidden  lg:flex  text-[19px] hover:text-gray-50 "
                >
                  Promote
                </p>
              </div>
              <div className="div hidden lg:flex">
              <FaChevronRight className="w-[10px] h-[10px] " />
              
              </div>
            </li>

            <li className="sidebarLink flex items-center justify-between mt-2  gap-4 px-1 lg:px-2 py-2 rounded-[10px]  duration-500 ease-in-out hover:bg-[#5932EA]  text-[#9197B3]  hover:text-[#ffffff]   ">
              <div className="flex items-center gap-4">
                <FiMessageSquare className="w-[20px] h-[20px] " />
                <p
                  href="#"
                  className="sidebarLinkText hidden  lg:flex  text-[19px] hover:text-gray-50 "
                >
                  Help
                </p>
              </div>
              <div className="div hidden lg:flex">
              <FaChevronRight className="w-[10px] h-[10px] " />
              
              </div>
            </li>

          </ul>
        </div>

        {/* box */}
        <div className="gradient hidden  lg:block  py-5 mt-[60px]  px-4  rounded-[20px] text-center justify-center">
          <h2 className="font-[600] text-white">Upgrade to  PRO to get access all Features!</h2>
          <button className="px-5 mt-2 py-2 w-full bg-white rounded-[100px] font-[700] text-[#4623E9] ">Get Pro Now!</button>
        </div>
      </div>
  );
};

export default Sidebar;
