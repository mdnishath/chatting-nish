import React from "react";
import Container from "../components/Container";
import GroupList from "../components/GroupList";
import FriendList from "../components/FriendList";
import { IoCall, IoSend } from "react-icons/io5";
import { BsCameraVideoFill } from "react-icons/bs";
import {
  AiTwotoneAudio,
  AiOutlineCamera,
  AiOutlineSelect,
} from "react-icons/ai";

const Message = () => {
  return (
    <Container>
      <div className="mx-auto flex w-full flex-col gap-y-8 gap-x-8 md:flex-row md:flex-wrap ">
        <div className="order-2 flex flex-col gap-y-9 px-5 sm:order-1 md:w-full lg:w-1/3">
          <GroupList />
          <FriendList />
        </div>
        <div className="relative order-1 mx-5 flex h-[600px] grow flex-col gap-y-5 overflow-x-hidden rounded-xl bg-white px-5 shadow-all sm:order-2 sm:h-[750px] md:w-full lg:w-1/3">
          <div className="">
            <div className="px-5">
              <div className=" border-b px-5 pt-5">
                <div className="flex items-center justify-between py-4">
                  <div className="h-[60px] w-[60px] rounded-full shadow-profile">
                    <img
                      className="w-full"
                      src="images/profile.png"
                      alt="profile"
                    />
                  </div>

                  <div className="pl-5">
                    <h4 className="text-base font-semibold">
                      Nishath Khandakar
                    </h4>
                    <div className="flex items-center gap-x-2">
                      <div className="h-[8px] w-[8px] rounded-full bg-green-400"></div>
                      <h4 className="text-sm font-semibold text-slate-500">
                        Online
                      </h4>
                    </div>
                  </div>
                  <div className="flex grow justify-end gap-x-5 text-2xl text-primary">
                    <IoCall />
                    <BsCameraVideoFill />
                  </div>
                </div>
              </div>

              <div className=" mt-5">
                <div className="flex px-5">
                  <div className="relative inline-block rounded-[10px] bg-chat p-4 before:absolute before:bottom-[-4px] before:left-[-6px] before:h-4 before:w-4 before:translate-x-0 before:translate-y-[-2px] before:rounded-br-[10px] before:border before:border-l-[0px] before:border-chat before:bg-chat before:content-[''] after:absolute after:bottom-[-2px] after:left-[-16px] after:h-4 after:w-4 after:rounded-br-[10px] after:bg-white after:content-['']">
                    <p>Hey There !</p>
                  </div>
                </div>
                <div className="flex justify-end px-5">
                  <div className="relative inline-block rounded-[10px] bg-primary p-4 before:absolute before:bottom-[-4px] before:right-[-6px] before:h-4 before:w-4 before:translate-x-0 before:translate-y-[-2px] before:rounded-bl-[10px] before:border before:border-l-[0px] before:border-primary before:bg-primary before:content-[''] after:absolute after:bottom-[-2px] after:right-[-16px] after:h-4 after:w-4 after:rounded-bl-[10px] after:bg-white after:content-['']">
                    <p className="text-white">Hey There !</p>
                  </div>
                </div>
              </div>
              <div className=" absolute bottom-[20px] left-0 w-full px-10 ">
                <div className="flex items-center gap-x-3 border-t pt-5">
                  <div className="relative w-full">
                    <input
                      className="w-full rounded-lg bg-chat px-[50px] py-2 outline-none placeholder:text-gray-700"
                      type="text"
                      placeholder="Enter your message"
                    />
                    <AiOutlineCamera className=" absolute top-[50%] right-2 translate-y-[-50%] text-[24px] text-primary" />
                    <AiOutlineSelect className=" absolute top-[50%] left-2 translate-y-[-50%] text-[24px] text-primary" />
                  </div>

                  <AiTwotoneAudio className=" text-[30px] text-primary" />
                  <IoSend className=" text-[30px] text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Message;
