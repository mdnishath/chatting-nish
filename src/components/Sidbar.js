import React from "react";
import { AiOutlineHome, AiOutlineLogout } from "react-icons/ai";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { NavLink } from "react-router-dom";
const Sidbar = () => {
  return (
    <div className="fixed bottom-0 w-full bg-primary px-4 md:top-0 md:left-0 md:h-full md:w-[100px] md:px-0 ">
      <div className="flex items-center justify-between gap-y-8 py-5 md:h-full md:flex-col">
        <div className="flex justify-around gap-x-12 md:flex-col md:gap-y-8">
          <AiOutlineHome className="text-[30px] text-white" />
          <NavLink to="/message">
            <HiOutlineChatBubbleOvalLeftEllipsis className="text-[30px] text-white" />
          </NavLink>
          <IoIosNotificationsOutline className="text-[30px] text-white" />
          <FiSettings className="text-[30px] text-white" />
        </div>
        <div>
          <AiOutlineLogout className="text-[30px] text-white" />
        </div>
      </div>
    </div>
  );
};

export default Sidbar;
